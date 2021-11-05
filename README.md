### How to run?

install dependencies in each folder by running yarn install
for app: yarn start;
for api: yarn build && yarn start;

#### or you can use docker to avoid building everything

docker-compose up --build;

### Bonus questions

#### Question 1

What would be a better way of showing the age of the students, instead of storing the age?
How would that impact the database structure and the UI components?
For example, In this assessment age will be kept like 23 or 24. What could be a better way?

1. I prefer using Dates instead of ints to save age.
2. we would replace the Number with Date and when creating new we ask for their birthday so we don't have to manually update the info everytime.
3. Birthday is the best thing to store when working with ages (Dates).

#### Question 2

Please, briefly explain how is the algorithm working on the left side? (Step by step if possible)
Can you please indicate the way of sorting? (Ascending, Descending)
Extra 1: Can you use this sorting code in your assessment. (Check View Students slide, sorting button implementation)
Extra 2: How would you improve this algorithm?

### Check solution.ts
