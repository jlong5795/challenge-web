# TruckMap Web Engineering Challenge

This project is intended to touch a few key technologies that TruckMap uses for its web applications to help us understand how you think about trade-offs between time, usefulness, and simplicity in a realistic setting.

We are respectful of your time. If we’ve requested you do this challenge we’ll pay **$200 for any submission** in good faith effort, regardless if you’re ultimately hired.

## Project Description

You will build a real-time React.JS chat room that allows users to log in and send each other messages and links.  Links shared in the chat should include a preview of the link inline with the message (think Slack, iMessage, or Android Messages).

## Requirements

- Create a new [NextJS](https://nextjs.org) TypeScript application configured to use [tailwind.css](https://tailwindcss.com) for UI styles.
- Use socket.io to add the real-time chat functionality.
- Use Redux, Recoil, or React Hooks to store the application's state and process any client-side network requests.
- URL links shared in the chat should show an extracted metadata preview (page title, image, description/summary, etc. like Slack).  While it would be fine to use pre-existing components for the preview in a real setting, please implement the metadata fetching yourself on the server (not ajax in the client) and be mindful of the async experience of this for rendering in the client while that info is loading for other users.
- In the client, show a list of all users who are currently logged in to the room.

## Notes
- The auth login can be email-only for simplicity.
- Optionally, allow users to tag/mention other users in their messages.
- Messages, users, or any other data can be stored in memory (persistence isn't required).

## What We're Looking For

- Modular use of state management that contains the app's business logic (decoupled from UI components).
- Break up the UI into reusable components that follow either the React [presentational component/container](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) structure or Functional Components with Hooks.
- Consistent aesthetic and look-and-feel of the app.  We will have design resources available, but there will be times when you'll need to fill in the gaps without outside help.

## Submitting

- Please include a `README` with any instructions for setup, assumptions made for the project, and a few ideas for features you might add if the app was taken any further.
- Please provide screenshots or a video demo of the various UI screens.
- Zip and email your repository to us. You can remove `node_modules` before zipping to reduce size.
- We will provide constructive and timely feedback on your submission with a clear direction around next steps.  Thank you for your time.
