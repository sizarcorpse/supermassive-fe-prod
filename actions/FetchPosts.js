import getConfig from "next/config";
import fetch from "isomorphic-unfetch";

export const getAllPosts = async ({ context, limit, page }) => {
  const { publicRuntimeConfig } = getConfig();

  const response = await fetch(
    `${publicRuntimeConfig.ROOT_API_URL}/posts/page?_limit=${limit}&_sort=title&_page=${page}`
  );
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

export const getPostsByCategory = async ({ context, limit, page }) => {
  const { publicRuntimeConfig } = getConfig();
  const slug = context.query.slug;
  const response = await fetch(
    `${publicRuntimeConfig.ROOT_API_URL}/categories/contents?slug=${slug}&_limit=${limit}&_page=${page}`
  );
  const data = await response.json();

  return data;
};

export const getPostsByFeatured = async ({ context }) => {
  const { publicRuntimeConfig } = getConfig();

  const response = await fetch(
    `${publicRuntimeConfig.ROOT_API_URL}/posts?isFeatured=true`
  );
  const data = await response.json();

  return data;
};

export const getPostsByPopular = async ({ context }) => {
  const { publicRuntimeConfig } = getConfig();

  const response = await fetch(
    `${publicRuntimeConfig.ROOT_API_URL}/posts?_sort=views:DESC&isFeatured=true&_limit=12`
  );
  const data = await response.json();

  return data;
};

export const getPostsBySearch = async ({ context }) => {
  const { publicRuntimeConfig } = getConfig();
  const slug = context.query.slug;
  const response = await fetch(
    `${publicRuntimeConfig.ROOT_API_URL}/posts?title_contains=${slug}&_sort=views:DESC&_limit=12`
  );
  const data = await response.json();

  return data;
};

export const getAllCategories = async ({ context }) => {
  const { publicRuntimeConfig } = getConfig();
  const slug = context.query.slug;
  const response = await fetch(
    `${publicRuntimeConfig.ROOT_API_URL}/categories/list`
  );
  const data = await response.json();

  return data;
};
