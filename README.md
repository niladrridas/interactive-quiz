# Interactive Quiz

This is an interactive quiz web application where users can test their knowledge in various subjects such as Coding, Physics, and Mathematics.

## Features

- Choose from three categories: Coding, Physics, or Mathematics.
- Enter your name to personalize the quiz experience.
- Answer questions and receive instant feedback.
- Track your score as you progress through the quiz.
- View hints for each question to aid your understanding.
- A timer to challenge your speed and accuracy.
- A progress bar to visualize your advancement through the quiz.
- A leaderboard to see high scores.

## Technologies Used

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Icon List</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #1e1e2f;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        ul {
            list-style-type: none;
            padding: 0;
        }
        li {
            display: flex;
            align-items: center;
            margin: 10px 0;
            background: #2a2a3d;
            padding: 10px 20px;
            border-radius: 8px;
            transition: transform 0.3s ease, background 0.3s ease;
        }
        li:hover {
            transform: scale(1.05);
            background: #35354f;
        }
        li i {
            margin-right: 10px;
            font-size: 24px;
        }
    </style>
</head>
<body>
    <ul>
        <li><i class="fab fa-html5" style="color: #e34c26;"></i> HTML</li>
        <li><i class="fab fa-css3-alt" style="color: #264de4;"></i> CSS (with custom styling for a premium and futuristic look)</li>
        <li><i class="fab fa-js-square" style="color: #f7df1e;"></i> JavaScript</li>
        <li><i class="fab fa-bootstrap" style="color: #7952b3;"></i> Bootstrap (for responsive design)</li>
    </ul>
</body>
</html>


## How to Use

1. Clone the repository to your local machine:

   ```
   git clone https://github.com/niladrridas/interactive-quiz.git
   ```

2. Navigate to the project directory:

   ```
   cd interactive-quiz
   ```

3. Open the `index.html` file in your preferred web browser:

   ```
   open index.html
   ```

4. Select a category, enter your name, and start the quiz.

5. Answer the questions, view hints if needed, and track your score.

6. Upon completion, view your score and see if you made it to the leaderboard.

## Folder Structure

```
interactive-quiz/
├── index.html
├── styles.css
└── scripts.js
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](/LICENSE.md) file for details.