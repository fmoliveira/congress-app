# Technology Stack

Hello there! This document describes the technology stack adopted in the project, as well as the reasons behind every one of them. The reasons to pick up most of the technologies here are very solid, while others are object of study for me but that may also be helpful for the team reviewing it. This project is a great opportunity to show off my current skills as well as to demonstrate my ability to pick up new stuff quickly, and have a reason behind each pick up. PS: trying to proof some of my objections wrong is often a reason for me to experiment something new.

## Node.js Engine

Required version 6.14.4 or greater, as recommended in the original readme. It will work on Node.js LTS as well, currently 10.15.0 as of writing this.

The package upath@1.0.4 from original CRA's version in our dependency tree on yarn.lock required the engine version >=4 <=9. After upgrading CRA, both 6.14.4 and 10.15.0 satisfied the dependencies.

## Create React App

Originally on version 1.1.4, it has been updated to the latest version ^2.1.3 which has Babel 7 under the hood, allowing TypeScript to run alongside with Babel so we have TS linting on Webpack. :)

## React

Updated from ^16.3.1 to ^16.7.0 because why not? The safest time to make sure a core dependency's minor or patch versions are up to date is in the beginning of a project. And React is pretty mature with semver for upgrading ongoing projects as well. There are important bug fixes in this update, so, it was a no brainer for me.

We also have some cool niceties for this update such as memo, lazy, and suspense. Memo is a life saver that helps favouring functional components where they need to be pure. Lazy and suspense are awesome strategies for code splitting and lazy loading heavy components or heavy dependencies that aren't used very often, leaving your application unblocked in the meanwhile.

I wanted to update to react@next because hooks are very concise, but instead, I'll try to stick only to packages that would be safe for production usage today.

## Jest

...

## React Testing Library

...

## Redux

...

## Router

...

## TypeScript

Why TypeScript? I'm not sure if it's a nice go with React, but if it's so hot, we should try it in a playground [here] to get some hands on experience prior to even thinking on putting it into a production app ourselves. I've worked with TypeScript and Angular from 2016 to 2018 and it was a love and hate relationship. It was a pain to write typing definition files by hand for dependencies you needed but didn't have these typing definition files, but after that, it was nice having compile time errors for incompatible types, meaning that silly typing mistakes wouldn't even be pushed while running the linter before commiting code. However, at least at that time, Angular + TS had a big mistake: TS markets itself mostly because of typing, and TS already was the default choice for any Angular projects, but typings did not help anything on Angular templates, which were written either in HTML files or inside template strings - those issues were only caught in runtime, which made TS typings useless for roughly 50% of the time. Bummer! I hope they have found a solution for that, but I never looked back since leaving Angular. For React, I believe the type checker could have a better coverage thanks to TSX. Using TypeScript in this coding exercise will provide some feelings of TypeScript's current state and its integration with the React ecossytem, which will be valuable for me and as well the team reviewing my code.

## ESLint

...

## Ramda

I'm very skeptical about this one, but [this thread on Twitter](https://twitter.com/kyleshevlin/status/1004610055721779200) made me want to give it a try. I have already been writing some pointfree code before even having heard of this term, just because it always looked much simpler to understand. I often declare one liner fat arrow functions using Lodash and that has been enough for me to go pointfree. But given that Ramda has currying built in everywhere, allowing code to be more concise and less repetitive, it surely looks very interesting. I don't like following everything that's hot just because it's hot, but after reading for quite a while, I think that Ramda does deserve some attention.

I know of currying although I haven't used it often, and I wasn't aware of the FP version of Lodash before I started reading about Ramda, although I've been trying to write pointfree code before having met this term, just because it looks simpler to understand. I haven't been using Lodash for too many years but it's easy to learn and very pleasant to read, and I really appreciate how human friendly their function names are. Ramda doesn't seem to care with function naming too much and it looks more like a scientifical FP library...? Anyway it's a hot FP library that follows many FP principles diligently, so it may be worth a try. Whatever that helps making code simpler and more readable has a great chance for me to buy in, and now it's time to take a peek on Ramda on a practical project to see if it's all that.

## Styled Components

...

## Internationalisation

...

## Apollo GraphQL

...

## Service Workers

...

## Accessbility

...

## React Helmet

...

## React PDF

...
