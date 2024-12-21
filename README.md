# SQL Executer Web app

This web application allows users to execute SQL queries and view the results.

## Demo (LIVE WEB APP)

> https://query-executor.vercel.app/

## Features

- Execute SQL queries
- View the results of the queries
- See previous queries and their results

## Design & Application Architecture


- The web app is bootstrapped using [Vite with React and typescript template](https://vitejs.dev/guide/)
- [React router(latest)](https://reactrouter.com/en/main) is used for routing
- [Tailwind CSS](https://tailwindcss.com/) is used for styling
  - [classnames](https://www.npmjs.com/package/classnames) for conditional classnames
- [ZustandJS](https://docs.pmnd.rs/zustand/getting-started/introduction) is used for state management
- Hand-picked UI components from [shadcn-ui](https://ui.shadcn.com/docs/components/accordion)
  - Button
  - Table
- [UUID](https://www.npmjs.com/package/uuid) for generating unique ids

For organizing the code structure, I followed the ["Feature sliced design"](https://feature-sliced.design/) (FSD) architecture pattern. FSD is good for building front-end applications with high cohesion and low coupling. It is a scalable pattern that organizes the codebase into feature slices, where each slice contains all the necessary components, styles, and logic for a specific feature.

In this web app, we have two feature slices:

- Query Execution
- Query History

Code is organized in the following way:

- `app`: Contains the main app component, providers and routes
- `pages`: route components and data fetching logic for them
- `features`: feature slices
  - query-execution: components, hooks and logic for executing queries
  - query-history: components, hooks and logic for viewing query history
- `entities`: Business logic and data models. In our case, `Query` entity
- `shared`: shared components, api, hooks and utilities

## How to run the app locally

1. Clone the repository
2. Run `pnpm install` or `npm install` (if you prefer npm) to install the dependencies
3. Run `pnpm dev` or `npm run dev` to start the development server
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Usage (Screencast)

https://github.com/shidhincr/query-executor/assets/452711/0139347f-101d-40f3-9457-98efebc39c48

## UX Improvements

- Add loader while fetching the data, disable all the buttons and inputs.
- Tooltips for query history items to show the full query.
- Sticky header for the table to show the column names while scrolling.
- Re focus the input field after executing the query.
- Show the appropriate message in the UI when zero rows are returned.
- CMD + Enter to execute the query.
- Appropriate placeholder for the input field.

## Performance Improvements

- React router lazy loading routes for reducing bundle size
- Later: Switch to @tanstack/react-table for rendering the table. it support Virtualization

## Performance metrics (to be filled)

- Lighthouse score & Pagespeed Insights
    <img width="1364" alt="lighthouse_score" src="https://github.com/shidhincr/query-executor/assets/452711/76455d3c-3ee8-48c1-a15c-1b696fd14dfe">
    ![image](https://github.com/shidhincr/query-executor/assets/452711/690c5598-19e0-4983-b85a-f8a4c9a65e4e)

- Page load time
  - DomContentLoaded: under 300ms
  - Page load: under 300ms

 <img width="1328" alt="image" src="https://github.com/shidhincr/query-executor/assets/452711/2dd6c310-55f2-4729-80e6-cae8b99f9626">
  
- Bundle size
  - <img width="654" alt="image" src="https://github.com/shidhincr/query-executor/assets/452711/91a0af74-1f06-4720-a13d-7be63e60d221">

