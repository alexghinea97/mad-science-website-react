import React, { Component } from 'react';
import './Pagination.css';

export default class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: []
    };
    this.firstPart();
    this.middlePart();
    this.endPart();

    this.handlePager = this.handlePager.bind(this);
  }

  handlePager(eventData) {}

  firstPart() {
    if (this.props.currentPage > 1) {
      this.state.pages.push(
        <a href="jsx-a11y/href-no-hash" onClick={this.handlePager}>
          &laquo;
        </a>
      );
    }

    if (this.props.currentPage - 2 <= 3) {
      for (let index = 0; index < this.props.currentPage - 3; index++) {
        this.state.pages.push(
          <a href="jsx-a11y/href-no-hash" onClick={this.handlePager}>
            {index + 1}
          </a>
        );
      }
    } else {
      this.state.pages.push(
        <a href="jsx-a11y/href-no-hash" onClick={this.handlePager}>
          1
        </a>
      );
      this.state.pages.push(
        <a href="jsx-a11y/href-no-hash" onClick={this.handlePager}>
          2
        </a>
      );
      this.state.pages.push(
        <a href="jsx-a11y/href-no-hash" onClick={this.handlePager}>
          ...
        </a>
      );
    }
  }

  middlePart() {
    const start = Math.max(this.props.currentPage - 2, 1);

    for (let index = start; index < this.props.currentPage; index++) {
      this.state.pages.push(
        <a href="jsx-a11y/href-no-hash" onClick={this.handlePager}>
          {index}
        </a>
      );
    }

    this.state.pages.push(
      <a
        className="active"
        href="jsx-a11y/href-no-hash"
        onClick={this.handlePager}
      >
        {this.props.currentPage}
      </a>
    );

    const end = Math.min(this.props.currentPage + 2, this.props.maxPages);
    for (let index = this.props.currentPage + 1; index <= end; index++) {
      this.state.pages.push(
        <a href="jsx-a11y/href-no-hash" onClick={this.handlePager}>
          {index}
        </a>
      );
    }
  }

  endPart() {
    if (this.props.currentPage + 2 >= this.props.maxPages - 2) {
      for (
        let index = this.props.currentPage + 3;
        index <= this.props.maxPages;
        index++
      ) {
        this.state.pages.push(
          <a href="jsx-a11y/href-no-hash" onClick={this.handlePager}>
            {index}
          </a>
        );
      }
    } else {
      this.state.pages.push(
        <a href="jsx-a11y/href-no-hash" onClick={this.handlePager}>
          ...
        </a>
      );
      this.state.pages.push(
        <a href="jsx-a11y/href-no-hash" onClick={this.handlePager}>
          {this.props.maxPages - 1}
        </a>
      );
      this.state.pages.push(
        <a href="jsx-a11y/href-no-hash" onClick={this.handlePager}>
          {this.props.maxPages}
        </a>
      );
    }
    if (this.props.currentPage !== this.props.maxPages) {
      this.state.pages.push(
        <a href="jsx-a11y/href-no-hash" onClick={this.handlePager}>
          &raquo;
        </a>
      );
    }
  }

  render() {
    return <div className="pagination">{this.state.pages}</div>;
  }
}
