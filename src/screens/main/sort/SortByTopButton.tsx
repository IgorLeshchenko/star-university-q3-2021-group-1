import React from "react";
import { Button } from "@material-ui/core";
import { useStyles } from "../style";

interface Post {
  author: string,
  body: string,
  children: Post[],
  date: string,
  level: number,
  parent: string,
  title: string,
  upvotes: number,
  __v?: number,
  _id: string,
}


const SortByTopButton = () => {
  const { button } = useStyles();

  const dummyPosts: Post[] = [
    {
      author: "a",
      body: "test1",
      children: [
        {
          author: "oleks2",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          children: [],
          date: "2021-09-02T17:37:43.569Z",
          level: 1,
          parent: "61310be94d23d059e8de33f5",
          title: "Comment",
          upvotes: 0,
          _id: "61310bed4d23d059e8de33f6",
        },
      ],
      date: "2021-03-02T17:37:43.744Z",
      level: 0,
      parent: "61310be34d23d059e8de33f4",
      title: "Comment",
      upvotes: 30,
      __v: 0,
      _id: "61310be94d23d059e8de33f5",
    },
    {
      author: "b",
      body: "test7",
      children: [
        {
          author: "oleks2",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          children: [],
          date: "2021-09-02T17:37:49.569Z",
          level: 1,
          parent: "61310be94d23d059e8de33f5",
          title: "Comment",
          upvotes: 0,
          _id: "61310bed4d23d059e8de33f6",
        },
      ],
      date: "2021-09-02T17:37:45.744Z",
      level: 0,
      parent: "61310be34d23d059e8de33f4",
      title: "Comment",
      upvotes: 11,
      __v: 0,
      _id: "61310be94d23d059e8de33f5",
    },
    {
      author: "c",
      body: "test9",
      children: [
        {
          author: "oleks2",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          children: [],
          date: "2021-09-02T17:37:49.569Z",
          level: 1,
          parent: "61310be94d23d059e8de33f5",
          title: "Comment",
          upvotes: 0,
          _id: "61310bed4d23d059e8de33f6",
        },
      ],
      date: "2021-05-02T17:37:45.744Z",
      level: 0,
      parent: "61310be34d23d059e8de33f4",
      title: "Comment",
      upvotes: 90,
      __v: 0,
      _id: "61310be94d23d059e8de33f5",
    },
    {
      author: "d",
      body: "test2",
      children: [
        {
          author: "oleks2",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          children: [],
          date: "2021-09-02T17:37:49.569Z",
          level: 1,
          parent: "61310be94d23d059e8de33f5",
          title: "Comment",
          upvotes: 0,
          _id: "61310bed4d23d059e8de33f6",
        },
      ],
      date: "2021-11-02T17:37:45.744Z",
      level: 0,
      parent: "61310be34d23d059e8de33f4",
      title: "Comment",
      upvotes: 5,
      __v: 0,
      _id: "61310be94d23d059e8de33f5",
    },
    {
      author: "e",
      body: "test10",
      children: [
        {
          author: "oleks2",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          children: [],
          date: "2021-09-02T17:37:49.569Z",
          level: 1,
          parent: "61310be94d23d059e8de33f5",
          title: "Comment",
          upvotes: 0,
          _id: "61310bed4d23d059e8de33f6",
        },
      ],
      date: "2021-03-02T17:37:45.744Z",
      level: 0,
      parent: "61310be34d23d059e8de33f4",
      title: "Comment",
      upvotes: 17,
      __v: 0,
      _id: "61310be94d23d059e8de33f5",
    },
  ];

  const sortByTop = () => {
    const sortedByTop = dummyPosts.sort((a: Post, b: Post) => b.upvotes - a.upvotes);
    console.log(sortedByTop);
  };

  return (
    <div>
      <Button variant="outlined" className={button} onClick={sortByTop}>
        TOP
      </Button>
    </div>
  );
};

export default SortByTopButton;
