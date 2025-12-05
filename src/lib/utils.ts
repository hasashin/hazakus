import { clsx, type ClassValue } from "clsx"
import type { JSX } from "react"
import { twMerge } from "tailwind-merge"
import { Hazaksus } from '../components/hazaksus'

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
  const response = await fetch(requestUrl, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${apiToken}`
    },
  });
  if (response.ok){
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


export async function readPageContent(content: any): Promise<JSX.Element> {
  return Hazaksus()
}