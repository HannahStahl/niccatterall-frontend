import React, { Component } from "react";
import "./BlogPostPreview.css";
import config from "../config";

export default class BlogPostPreview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageURL: null
    };
  }

  async componentDidMount() {
    try {
      let imageURL;
      const { image } = this.props.blogPost;

      if (image) {
        imageURL = config.cloudFront.URL + image;
      } else {
        imageURL = "no-image.jpg";
      }

      this.setState({ imageURL });
    } catch (e) {}
  }

  render() {
    return (
      <div>
        <div className="blog-post-image">
          <img src={this.state.imageURL} width="120px" height="100px" alt="Blog Img" />
        </div>
        <div className="blog-post-content-preview">
          <h4 className="blog-post-title">{this.props.blogPost.title}</h4>
          <p>{this.props.blogPost.blogPostState === "Published" ? "Published: " + this.props.blogPost.publishedDate : "Draft"}</p>
        </div>
      </div>
    );
  }
}
