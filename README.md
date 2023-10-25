# IEEE UTD Website

## How to add a new feature / fix

1. Clone the repo and switch to the dev branch
This can be done by typing 

```bash 
git clone https://github.com/ieee-utd/ieeeutdwebsite.git
```
on your terminal and then 
```bash 
git checkout dev
```
2. Creature a branch off of dev
```bash
git checkout -b some-feature dev
```
3. Add whatever features you want and commit them 
4. Switch to dev branch and merge there
```bash
git checkout dev
```
and then
```bash
git merge some-branch
```
5. Correct merge conflicts, and then commit your changes
6. Push, which will put in a Pull Request
7. And that's all, wait for code owner to review and accept the changes
## Running the website locally

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
