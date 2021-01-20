import getConfig from "next/config";
import fetch from "isomorphic-unfetch";

export const getAllPosts = async ({ context }) => {
  const { publicRuntimeConfig } = getConfig();

  const response = await fetch(`${publicRuntimeConfig.ROOT_API_URL}/posts`);
  const data = await response.json();

  return data;
};
export const getASinglePost = async ({ context, slug }) => {
  const { publicRuntimeConfig } = getConfig();

  const response = await fetch(
    `${publicRuntimeConfig.ROOT_API_URL}/posts?slug=${slug}`
  );
  const data = await response.json();

  return data[0];
};
export const getEditorsChoicePost = async ({ context, slug }) => {
  const { publicRuntimeConfig } = getConfig();

  const response = await fetch(
    `${publicRuntimeConfig.ROOT_API_URL}/posts?isEditorsChoise=${true}`
  );
  const data = await response.json();

  return data;
};
