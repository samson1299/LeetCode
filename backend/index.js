const cors = require('cors');
const express = require('express');
const app = express();
const { VM } = require("vm2");
app.use(express.json());

const port = 3001;

app.use(cors());

const USERS = [];

const PROBLEMS = [
    {
        Title: "1. Two Sum",
        Acceptance: "72.1%",
        Difficulty: "Hard",
        Description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.You may assume that each input would have exactly one solution, and you may not use the same element twice.You can return the answer in any order.",
        Examples: [
            {
                Example: 1,
                Input: "nums = [2,7,11,15], target = 9",
                Output: "[0,1]",
            },
            {
                Example: 2,
                Input: "nums = [3,3], target = 6",
                Output: "[0,1]",
            },
            {
                Example: 3,
                Input: "nums = [3,2,4], target = 6",
                Output: "[1,2]",
            },
        ],
        Constraints: " 2 <= nums.length ",
        functionName: "twoSum",
        testCases: [
            {
                Input: "[2,7,11,15]",
                Output: "9",
            },
            {
                Input: "[3,2,4]",
                Output: "6",
            },
            {
                Input: "[3,3]",
                Output: "6"
            }
        ]
    },
    {
        Title: "2. Add Two Numbers",
        Acceptance: "48.5%",
        Difficulty: "Medium",
        Description: "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.",
        Examples: [
            {
                Example: 1,
                Input: "l1 = [2,4,3], l2 = [5,6,4]",
                Output: "[7,0,8]",
            },
            {
                Example: 2,
                Input: " l1 = [0], l2 = [0]",
                Output: "[0]",
            },
            {
                Example: 3,
                Input: l1 = "[9,9,9,9,9,9,9], l2 = [9,9,9,9]",
                Output: "[8,9,9,9,0,0,0,1]",
            }
        ],
        Constraints: "The number of nodes in each linked list is in the range [1, 100].",
        functionName: "addTwoSum",
        testCases: [
            {
                Input: "[2,4,3]",
                Output: "[5,6,4]",
            },
            {
                Input: "[0]",
                Output: "[0]",
            },
            {
                Input: "[9,9,9,9,9,9,9]",
                Output: "[9,9,9,9]"
            },
        ]
    },
    {
        Title: "3. Longest Substring Without Repeating Characters",
        Acceptance: "39.1%",
        Difficulty: "Medium",
        Description: "Given a string s, find the length of the longest substring without duplicate characters.",
        Examples: [
            {
                Example: 1,
                Input: "s = abcabcbb",
                Output: 3,
            },
            {
                Example: 2,
                Input: "s = bbbbb",
                Output: 1,
            },
            {
                Example: 3,
                Input: "s = pwwkew",
                Output: "3 Explanation: The answer is wke, with the length of 3.",
            }
        ],
        Constraints: "0 <= s.length <= 5 * 104 s consists of English letters, digits, symbols and spaces.",
        functionName: "longestSubstring",
        testCases: [
            {
                Output: "abcabcbb",
            },
            {
                Output: "bbbbb",
            },
            {
                Output: "pwwkew"
            },
        ]
    },
    {
        Title: "4. Median of Two Sorted Arrays",
        Acceptance: "46.6%",
        Difficulty: "Hard",
        Description: "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).",
        Examples: [
            {
                Example: 1,
                Input: "nums1 = [1,3], nums2 = [2]",
                Output: "2.00000",
            },
            {
                Example: 2,
                Input: "nums1 = [1,2], nums2 = [3,4]",
                Output: "2.50000",
            }
        ],
        Constraints: "nums1.length == m ",
        functionName: "MedianOftwo",
        testCases: [
            {
                Input: "[1,3]",
                Output: "[2]"
            },
            {
                Input: "[1,2]",
                Output: "[3,4]"
            },
        ]
    },
    {
        Title: "5. Longest Palindromic Substring",
        Acceptance: "37.8%",
        Difficulty: "Medium",
        Description: "Given a string s, return the longest palindromic substring in s.",
        Examples: [
            {
                Example: 1,
                Input: "s = babad",
                Output: "bab",
            },
            {
                Example: 2,
                Input: "s = cbbd",
                Output: "bb",
            }
        ],
        Constraints: "1 <= s.length <= 1000 ",
        functionName: "longestPalindromic",
        testCases: [
            {
                Output: "babad",
            },
            {
                Output: "cbbd",
            },

        ]
    },
    {
        Title: "6.  Zigzag Conversion",
        Acceptance: "54.2%",
        Difficulty: "Medium",
        Description: "The string  PAYPALISHIRING is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)",
        Examples: [
            {
                Example: 1,
                Input: "s = PAYPALISHIRING, numRows = 3",
                Output: "PAHNAPLSIIGYIR",
            },
            {
                Example: 2,
                Input: "s = PAYPALISHIRING, numRows = 4",
                Output: "PINALSIGYAHRPI",
            },
            {
                Example: 3,
                Input: "s = A, numRows = 1",
                Output: "A",
            }
        ],
        Constraints: " 1 <= s.length <= 1000 ",
        functionName: "zigZagConversion",
        testCases: [
            {
                Input: "PAYPALISHIRING",
                Output: "3"
            },
            {
                Input: "PAYPALISHIRING",
                Output: "4",
            },
            {
                Input: "A",
                Output: "1",
            },
        ]
    },
    {
        Title: "7. Reverse Integer",
        Acceptance: "31.9%",
        Difficulty: "Medium",
        Description: "Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.",
        Examples: [
            {
                Example: 1,
                Input: " x = 123",
                Output: "321",
            },
            {
                Example: 2,
                Input: " x = -123",
                Output: "-321",
            },
            {
                Example: 3,
                Input: "x = 120",
                Output: " 21",
            }
        ],
        Constraints: "-231 <= x <= 231 - 1",
        functionName: "reverseInteger",
        testCases: [
            {
                Output: "123"
            },
            {
                Output: "-123"
            },
            {
                Output: "120"
            },
        ]
    },
    {
        Title: "8.String to Integer (atoi)",
        Acceptance: "21.0%",
        Difficulty: "Medium",
        Description: "Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.",
        Examples: [
            {
                Example: 1,
                Input: "s = 42",
                Output: "42",
            },
            {
                Example: 2,
                Input: "s =  -042",
                Output: "-42",
            },
            {
                Example: 3,
                Input: "s = 1337c0d3",
                Output: "1337",
            }
        ],
        Constraints: "0 <= s.length <= 200",
        functionName: "stringTointeger",
        testCases: [
            {
                Output: "42"
            },
            {
                Output: "   -042"
            },
            {
                Output: "1337c0d3",
            },
            {
                Output: "0-1",
            },
            {
                Output: "words and 987",
            },
        ]

    },
    {
        Title: "9. Palindrome Number",
        Acceptance: "60%",
        Difficulty: "Easy",
        Description: "Given an integer x, return true if x is a palindrome, and false otherwise.",
        Examples: [
            {
                Example: 1,
                Input: " x = 121",
                Output: "true",
            },
            {
                Example: 2,
                Input: " x = -121",
                Output: " false",
            },
            {
                Example: 3,
                Input: "x = 10",
                Output: "false",
            }
        ],
        Constraints: "-231 <= x <= 231 - 1",
        functionName: "palindromeNumber",
        testCases: [
            {
                Output: "121",
            },
            {
                Output: "-121"
            },
            {
                Output: "10"
            },
        ]
    },
    {
        Title: "10. Regular Expression Matching",
        Acceptance: "31.0%",
        Difficulty: "Hard",
        Description: "Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where: '.' Matches any single character.​​​​'*' Matches zero or more of the preceding element.",
        Examples: [
            {
                Example: 1,
                Input: "s = aa, p = a",
                Output: "false",
            },
            {
                Example: 2,
                Input: " s = aa, p = a*",
                Output: "true",
            },
            {
                Example: 3,
                Input: "s = ab, p = .*",
                Output: " true",
            }
        ],
        Constraints: "1 <= s.length <= 20 ",
        functionName: "regularExpression",
        testCases: [
            {
                Input: "aa",
                Output: "a",
            },
            {
                Input: "aa",
                Output: "a*",
            },
            {
                Input: "ab",
                Output: ".*",
            },
        ]
    },

];

const SUBMISSION = [];


app.post('/signup', function (req, res) {

    const { email, password } = req.body;

    const userExists = USERS.find(user => user.email === email);

    if (userExists) {
        return res.status(400).json({
            message: "User already exists"
        });
    }

    USERS.push({
        email,
        password
    });

    res.status(200).json({
        message: "User signed up successfully"
    });
});



app.post('/signin', function (req, res) {

    const { email, password } = req.body;


    const user = USERS.find(user => user.email === email);

    if (!user) {
        return res.status(401).json({
            message: "User not found"
        });
    }

    if (user.password !== password) {
        return res.status(401).json({
            message: "Incorrect password"
        });
    }


    const token = Math.random().toString();

    res.status(200).json({
        message: "Login successful",
        token: token
    });
});



app.get('/questions', function (req, res) {

    res.status(200).json({
        questions: PROBLEMS
    });
});


app.get("/submissions", function (req, res) {

    res.status(200).json({
        submissions: SUBMISSION
    });
});



app.post("/submissions", function (req, res) {

    const { email, questionId, answer } = req.body;


    const result = Math.random() > 0.5 ? "Accepted" : "Rejected";

    const newSubmission = {
        email,
        questionId,
        answer,
        result
    };

    SUBMISSION.push(newSubmission);

    res.status(200).json({
        message: "Submission received",
        submission: newSubmission
    });
});


app.post("/run", async (req, res) => {
    const { code, questionId } = req.body;
    const problem = PROBLEMS[questionId];
    if (!problem) {
        return res.status(404).json({
            message: "Problem not found"
        });
    }
    try {
        const vm = new VM({
            timeout: 1000,
            sandbox: {}
        });
        vm.run(code);

        const fn = vm.run(problem.functionName);
        const results = [];

        for (const test of problem.testCases) {

            const result = fn(...test.Input);

            results.push({
                input: test.Input,
                expected: test.Output,
                recived: result,
                passed: JSON.stringify(result) === JSON.stringify(test.Output)

            });
        }
        res.json({
            sucess: true,
            results
        });

    } catch (err) {
        res.status(404).json({
            sucess: false,
            error: err.message
        })

    }
})

app.post("/submit", async (req, res) => {
    const { code, questionId, email } = req.body;
    const problem = PROBLEMS[questionId];
    try {
        const vm = new VM({
            timeout: 1000,
            sandbox: {}
        });
        vm.run(code);

        const fn = vm.run(problem.functionName);

        let allPassed = true;

        for (const test of problem.testCases) {
            const result = fn(...test.Input);

            const passed = JSON.stringify(result) === JSON.stringify(problem.Output);

            if (!passed) {
                allPassed: false;
                break;
            }

        }

        const submissionResult = allPassed ? "Accepted" : "Wrong answer";

       const newSubmission ={
        email,
        questionId,
        answer:code,
        result:submissionResult
       };
       SUBMISSION.push(newSubmission);

       res.json({
        message:submissionResult,
        result:newSubmission
       });
    }catch(err){
        res.status(404).json({
        message:"Runtime Error",
        error:err.message 
        })
    }
});


app.listen(port, function () {
    console.log(`Example app listening on port ${port}`);
});
