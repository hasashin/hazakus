import { clsx, type ClassValue } from "clsx"
import type { LoaderFunctionArgs } from "react-router";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function strapiGet(type: string, filters: {[key:string]: string}): Promise<any> {
  const apiBase = import.meta.env.VITE_BackendHost
  const apiToken = import.meta.env.VITE_BackendApiKey
  const mappedFilters = []
  for(const filter in filters){
    mappedFilters.push(`${filter}=${filters[filter]}`)
  }
  let requestUrl = `${apiBase}/api/${type}`
  if (mappedFilters.length > 0){
    requestUrl += `?${mappedFilters.join('&')}`
  }
  console.log(`Sending request to ${requestUrl}`)
  const response = await fetch(requestUrl, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${apiToken}`
    },
  });
  if (response.ok){
    console.log('Got OK response');
    try{
      const respObj = await response.json();
      return respObj;
    }
    catch {
      console.error(`Could not parse json response`)
      return null;
    }
  }
  return null;
}

export async function contentLoader({ request }: LoaderFunctionArgs){
  console.log(`Loader Function url: ${request.url}`);
  const content = await strapiGet('test', {});
  return content;
}

export async function pagesLoader(){
  const pagesList = await strapiGet('pages', {})
  return pagesList
}