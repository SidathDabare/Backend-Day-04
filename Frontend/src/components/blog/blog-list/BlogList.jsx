/** @format */

import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import { Col, Row } from "react-bootstrap"
//import posts from "../../../data/posts.json"
import BlogItem from "../blog-item/BlogItem"

const BlogList = (props) => {
  const [posts, setPosts] = useState([])
  console.log(posts)
  const getPosts = async () => {
    let url = "http://localhost:3001/posts"
    try {
      let res = await fetch(url)
      let data = await res.json()
      return data
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPosts().then((post) => {
      setPosts(post)
      //console.log(post)
    })

    //console.log(posts)
  }, [])
  return (
    <Row>
      {posts.map((post, i) => (
        <Col
          key={i}
          md={4}
          style={{
            marginBottom: 50,
          }}>
          <BlogItem key={post.title} {...post} />
        </Col>
      ))}
    </Row>
  )
}

export default BlogList
