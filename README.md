# e-blogger

e-blogger is a modern blogging platform built with Next.js, and a variety of other powerful libraries and tools. This README will guide you through the setup, development, and deployment process of the project.

## Table of Contents

- [Installation](#installation)
- [Development](#development)
- [Build](#build)
- [Start](#start)
- [Lint](#lint)
- [Dependencies](#dependencies)
- [DevDependencies](#devdependencies)
- [Contributing](#contributing)
- [License](#license)
- [Usage](#usage)

## Installation

To install the necessary dependencies, run:

```bash
npm install
```

**Note:** This project was developed using **Node.js version 21.1.0 (64-bit executable)**. Ensure you are using this version or a compatible one to avoid any potential issues.

## Development

To start the development server, use the following command:

```bash
npm run dev
```

This command concurrently starts both the Next.js development server and the mock user authentication server.

- `npm run dev:next` - Starts the Next.js development server.
- `npm run dev:server` - Starts the mock user authentication server on port 3001.

## Build

To create an optimized production build, run:

```bash
npm run build
```

## Start

To start the application in production mode, run:

```bash
npm run start
```

## Lint

To run the linter and check for any linting errors, use:

```bash
npm run lint
```

## Dependencies

The project relies on the following main dependencies:

- `@emotion/cache`
- `@emotion/react`
- `@emotion/styled`
- `@mui/icons-material`
- `@mui/material`
- `@reduxjs/toolkit`
- `@tiptap/starter-kit`
- `axios`
- `body-parser`
- `cookie`
- `cookies-next`
- `express`
- `formik`
- `jsonwebtoken`
- `mock-user-auth`
- `mui-tiptap`
- `next`
- `next-auth`
- `react`
- `react-dom`
- `react-redux`
- `sweetalert2`
- `yup`

## DevDependencies

The project relies on the following development dependencies:

- `@types/cookie`
- `@types/express`
- `@types/jsonwebtoken`
- `@types/node`
- `@types/react`
- `@types/react-dom`
- `concurrently`
- `eslint`
- `eslint-config-next`
- `ts-node-dev`
- `typescript`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Usage

- To create a new post a user must be logged in. After that you will see a button on the `/posts` page that redirects you to the page of creating a new post
![image](https://github.com/ncctcr/e-blogger/assets/37658170/e2d25961-1324-4f3c-91b5-71914a2a7341)

- To edit/delete an existing post a user must be logged in. After that you will see the edit and delete buttons on the `/posts/{id}` page
![image](https://github.com/ncctcr/e-blogger/assets/37658170/f0e96e22-c615-4fe6-ae70-ffd800d062f3)
