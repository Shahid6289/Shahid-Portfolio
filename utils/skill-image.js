import aws from '/public/svg/skills/aws.svg';
import azure from '/public/svg/skills/azure.svg';
import bootstrap from '/public/svg/skills/bootstrap.svg';
import c from '/public/svg/skills/c.svg';
import canva from '/public/svg/skills/canva.svg';
import cplusplus from '/public/svg/skills/cplusplus.svg';
import css from '/public/svg/skills/css.svg';
import dart from '/public/svg/skills/dart.svg';
import docker from '/public/svg/skills/docker.svg';
import figma from '/public/svg/skills/figma.svg';
import firebase from '/public/svg/skills/firebase.svg';
import flutter from '/public/svg/skills/flutter.svg';
import gcp from '/public/svg/skills/gcp.svg';
import git from '/public/svg/skills/git.svg';
import graphql from '/public/svg/skills/graphql.svg';
import html from '/public/svg/skills/html.svg';
import java from '/public/svg/skills/java.svg';
import javascript from '/public/svg/skills/javascript.svg';
import materialui from '/public/svg/skills/materialui.svg';
import matlab from '/public/svg/skills/matlab.svg';
import microsoftoffice from '/public/svg/skills/microsoftoffice.svg';
import mongoDB from '/public/svg/skills/mongoDB.svg';
import mysql from '/public/svg/skills/mysql.svg';
import numpy from '/public/svg/skills/numpy.svg';
import opencv from '/public/svg/skills/opencv.svg';
import picsart from '/public/svg/skills/picsart.svg';
import postgresql from '/public/svg/skills/postgresql.svg';
import python from '/public/svg/skills/python.svg';
import react from '/public/svg/skills/react.svg';
import tailwind from '/public/svg/skills/tailwind.svg';
import tensorflow from '/public/svg/skills/tensorflow.svg';
import wordpress from '/public/svg/skills/wordpress.svg';
import nodejs from '/public/svg/skills/nodejs.svg';
import springboot from '/public/svg/skills/springboot.svg';
import nextJS from '/public/svg/skills/nextJS.svg';


export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'gcp':
      return gcp;
    case 'html':
      return html;
    case 'spring boot':
      return springboot;
    case 'docker':
      return docker;
    case 'node js':
      return nodejs;
    case 'next js':
      return nextJS;
    case 'css':
      return css;
    case 'javascript':
      return javascript;
    case 'react':
      return react;
    case 'bootstrap':
      return bootstrap;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'postgresql':
      return postgresql;
    case 'tailwind':
      return tailwind;
    case 'c':
      return c;
    case 'c++':
      return cplusplus;
    case 'dart':
      return dart;
    case 'java':
      return java;
    case 'matlab':
      return matlab;
    case 'python':
      return python;
    case 'aws':
      return aws;
    case 'firebase':
      return firebase;
    case 'git':
      return git;
    case 'graphql':
      return graphql;
    case 'materialui':
      return materialui;
    case 'numpy':
      return numpy;
    case 'opencv':
      return opencv;
    case 'tensorflow':
      return tensorflow;
    case 'wordpress':
      return wordpress;
    case 'azure':
      return azure;
    case 'figma':
      return figma;
    case 'flutter':
      return flutter;
    case 'microsoft office':
      return microsoftoffice;
    case 'picsart':
      return picsart;
    case 'canva':
      return canva;
    default:
      break;
  }
}
