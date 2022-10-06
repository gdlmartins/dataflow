import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch } from "react-redux";
import "../../../App.scss";
import useForm from "../../../hooks/useForm";
import { postAdded } from "./postSlice";



const Form = () => {
  const dispatch = useDispatch();
  const { clear, onChange, form } = useForm({
    title: "",
    content: "",
  });

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onSubtmitHandler = (e) => {
    e.preventDefault();
    dispatch(
      postAdded({
        id: nanoid(),
        title: form.title,
        content: form.content,
      })
    );
    console.log(form);

    clear();
  };

  return (
    <form onSubmit={onSubtmitHandler} className='post-article'>
      <input
        value={form.title}
        name='title'
        placeholder='Title'
        className='post-article__form'
        onChange={onChange}
      />

      <input
        value={form.content}
        name='content'
        placeholder='Content'
        className='post-article__form'
        onChange={onChange}
      />
      <button>Submit</button>
    </form>
  );
};

export default Form;
