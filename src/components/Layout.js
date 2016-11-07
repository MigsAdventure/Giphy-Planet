import React, { Component } from 'react';
import MainPage from './MainPage';


export default function Layout(props) {
  return (
    <div>
      {props.children}
    </div>
  );
}
