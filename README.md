# Sample Practical Test Project - earn up to 5,000$ per month

There are three tasks to be completed. You can choose any of them and solve it to start the conversation.

The first two developers to completely solve all of them before May 3rd, 8:00 GMT+3 (https://time.is/GMT+3) will get the job: 1 month full-time paid work starting immediately, or a proportional part-time job within the next 2 months (with a minimum of 4 hours per day), with a salary of up to 5,000$/month (see the "milestones"/objective results + bonus below). If we collaborate well during this first month, we'll be happy to extend this contract further.

Also, if you are the first to completely solve a task (with no bugs, errors or warnings) before May 2rd, 13:00 GMT+3 (https://time.is/GMT+3), you will be rewarded for your successful effort with 200$, regardless of whether you qualify for getting the job or not (i.e. being the first to completely solve just one task out of the three required).

## The tasks:

1. Implement a "Cycle through" behavior between the B1\_{1,2,3}.svg images, and make the page load an arbitrarily chosen image by passing a query parameter to the page (e.g. /view?image=2 should load B1_2 initially instead of the default B1_1 - when no parameter is sent to the page)

2. Configure the project so that it works consistently on most active devices today (>97%) and integrates linting support for all filetypes in the project. Use Webpack with:

   - Babel
   - BrowserList to target desired devices,
   - Terser to minify and uglify/mangle/obfuscate the code
   - Autoprefixer
   - svgo to optimize images for different screen resolutions and
   - update SVG files to use `srcset` inside their `image` element

3. Add Google Analytics/TagManager to the page so that we know how many times each image has been viewed by a particular user/session. Create a video demonstrating the required steps from adding analytics to a gmail account all the way to seeing relevant reports demonstrating proper counting of accessed images.

## Additional details

Please **fork** [this repository](https://github.com/razvanso/practical-test), run `npm install` to download dependencies, then run `npm run lint` to make sure you're starting clean, with no linting errors. Then create a **new branch** for each task you work on (___your-name_task-{1-3}___) and create a **Pull Request** for each completed task (___Task 1 - solved by Your Name___). The time of the Pull Request decides who was the first to solve a particular task. A rejected PR (if it has bugs, errors or warnings) will be disqualified and a new PR will need to be created by its author. 3 rejected PRs will disqualify their author for that task, so please be precise and use our time well.

Make sure your first direct message to me includes a link to your PR that completely solves your first task.

If you feel you don't have enough information for the first task you've chosen, make any required assumptions and solve it the best you can, then include these assumptions and why they were needed in your first message.

If your first message doesn't respect this requirement, it will be kindly ignored.

Details are important, so please understand each task well before acting upon it. Each misunderstanding costs us time and defeats the purpose of your job, which is to help us save time by completing tasks in an efficient manner. Thank you for your understanding.

The sooner you start a task, the better chances you have to get the job and/or the reward for being the first one to complete it.

## Results and performance (aka "milestones"):

1. **1,000$ Effort**: 160 hours, minimum 4 hours per day (4-6 days per week) of focused, disciplined work (this is entirely in your hands)
2. **1,000$ Process**: respecting the process each day (this is also entirely into your hands - you will get a quick video training on how to achieve all these when we start working together)
   - [ ] daily status call (or video)
   - [ ] atomic commits to git, that are easy to understand
   - [ ] no linting errors (run `npm run lint`)
   - [ ] each feature starts on its own branch
   - [ ] each completed feature has a Pull Request
3. **1,000$ Progress**: making daily progress (this is the reason why your applied skills are valuable)
4. **1,000$ Results**: Results mean code that, at the end of each week (and, ideally, each day) is properly:
   - [ ] **working**
   - [ ] **tested** (ideally automated, but at least manually: as a quick, succint video)
   - [ ] **clean** (no linting errors)
   - [ ] **pushed** to the GitHub repository
   - [ ] **deployed** to the staging server (and working there as well)
   - [ ] **refactored** to be performant and easy to understand
   - [ ] **documented**
5. **1,000$ Speed**: Bonus if you are exceptionally good and fast to produce results. While this is subjective, we'd be genuinely happy to pay it to you for outstanding results that make us say "Wow! This guy/girl is outstandingly great and fast"
