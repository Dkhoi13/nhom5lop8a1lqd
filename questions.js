/*
 * Ngân hàng câu hỏi của nhom5lop8a1lqd.
 * Chỉ chứa nội dung trực tiếp về 7 hằng đẳng thức đáng nhớ.
 * Mỗi hành tinh có 5 câu: trắc nghiệm, đúng/sai và trả lời ngắn.
 */

const formulaPlanets = [
  {
    id: "square-sum",
    number: "01",
    name: "Bình phương của một tổng",
    formula: "(a + b)² = a² + 2ab + b²",
    questions: [
      {
        id: "p1-q1",
        type: "multiple-choice",
        prompt: "Khai triển <span class=\"formula\">(x + 3)²</span> được kết quả nào?",
        options: [
          { id: "A", text: "x² + 3x + 9" },
          { id: "B", text: "x² + 6x + 9" },
          { id: "C", text: "x² + 9" },
          { id: "D", text: "x² + 6x + 6" }
        ],
        answer: "B",
        explanation: "Áp dụng <span class=\"formula\">(a + b)² = a² + 2ab + b²</span>: <span class=\"formula\">(x + 3)² = x² + 6x + 9</span>."
      },
      {
        id: "p1-q2",
        type: "true-false",
        prompt: "Mệnh đề sau đúng hay sai? <span class=\"formula\">(a + b)² = a² + b²</span>",
        options: [
          { id: "true", text: "Đúng" },
          { id: "false", text: "Sai" }
        ],
        answer: "false",
        explanation: "Sai vì phải có thêm số hạng ở giữa là <span class=\"formula\">2ab</span>."
      },
      {
        id: "p1-q3",
        type: "short-answer",
        prompt: "Điền số còn thiếu: <span class=\"formula\">(m + 5)² = m² + \u200b_____m + 25</span>",
        acceptedAnswers: ["10", "10m"],
        answerDisplay: "10",
        explanation: "Số hạng giữa là <span class=\"formula\">2 · m · 5 = 10m</span>."
      },
      {
        id: "p1-q4",
        type: "multiple-choice",
        prompt: "Biểu thức <span class=\"formula\">9x² + 12xy + 4y²</span> viết dưới dạng bình phương là:",
        options: [
          { id: "A", text: "(3x + 2y)²" },
          { id: "B", text: "(3x - 2y)²" },
          { id: "C", text: "(9x + 4y)²" },
          { id: "D", text: "(x + y)²" }
        ],
        answer: "A",
        explanation: "Vì <span class=\"formula\">(3x)² + 2 · 3x · 2y + (2y)² = 9x² + 12xy + 4y²</span>."
      },
      {
        id: "p1-q5",
        type: "true-false",
        prompt: "Trong <span class=\"formula\">(a + b)²</span>, số hạng giữa là <span class=\"formula\">2ab</span>.",
        options: [
          { id: "true", text: "Đúng" },
          { id: "false", text: "Sai" }
        ],
        answer: "true",
        explanation: "Đúng. Công thức có dạng <span class=\"formula\">a² + 2ab + b²</span>."
      }
    ]
  },
  {
    id: "square-difference",
    number: "02",
    name: "Bình phương của một hiệu",
    formula: "(a - b)² = a² - 2ab + b²",
    questions: [
      {
        id: "p2-q1",
        type: "multiple-choice",
        prompt: "Khai triển <span class=\"formula\">(x - 4)²</span> được kết quả nào?",
        options: [
          { id: "A", text: "x² - 4x + 16" },
          { id: "B", text: "x² + 8x + 16" },
          { id: "C", text: "x² - 8x + 16" },
          { id: "D", text: "x² - 16" }
        ],
        answer: "C",
        explanation: "Áp dụng <span class=\"formula\">(a - b)² = a² - 2ab + b²</span>: <span class=\"formula\">(x - 4)² = x² - 8x + 16</span>."
      },
      {
        id: "p2-q2",
        type: "true-false",
        prompt: "Mệnh đề sau đúng hay sai? <span class=\"formula\">(a - b)² = a² + 2ab + b²</span>",
        options: [
          { id: "true", text: "Đúng" },
          { id: "false", text: "Sai" }
        ],
        answer: "false",
        explanation: "Sai. Với bình phương của một hiệu, số hạng giữa là <span class=\"formula\">-2ab</span>."
      },
      {
        id: "p2-q3",
        type: "short-answer",
        prompt: "Điền số còn thiếu: <span class=\"formula\">(p - 3)² = p² - \u200b_____p + 9</span>",
        acceptedAnswers: ["6", "6p"],
        answerDisplay: "6",
        explanation: "Số hạng giữa là <span class=\"formula\">-2 · p · 3 = -6p</span>."
      },
      {
        id: "p2-q4",
        type: "multiple-choice",
        prompt: "Biểu thức <span class=\"formula\">25m² - 20mn + 4n²</span> viết dưới dạng bình phương là:",
        options: [
          { id: "A", text: "(5m + 2n)²" },
          { id: "B", text: "(5m - 2n)²" },
          { id: "C", text: "(25m - 4n)²" },
          { id: "D", text: "(m - n)²" }
        ],
        answer: "B",
        explanation: "Vì <span class=\"formula\">(5m - 2n)² = 25m² - 20mn + 4n²</span>."
      },
      {
        id: "p2-q5",
        type: "true-false",
        prompt: "Trong <span class=\"formula\">(a - b)²</span>, số hạng đầu và cuối lần lượt là <span class=\"formula\">a²</span> và <span class=\"formula\">b²</span>.",
        options: [
          { id: "true", text: "Đúng" },
          { id: "false", text: "Sai" }
        ],
        answer: "true",
        explanation: "Đúng. Hai số hạng bình phương luôn là <span class=\"formula\">a²</span> và <span class=\"formula\">b²</span>."
      }
    ]
  },
  {
    id: "difference-squares",
    number: "03",
    name: "Hiệu hai bình phương",
    formula: "a² - b² = (a - b)(a + b)",
    questions: [
      {
        id: "p3-q1",
        type: "multiple-choice",
        prompt: "Phân tích <span class=\"formula\">x² - 49</span> thành nhân tử:",
        options: [
          { id: "A", text: "(x - 7)(x + 7)" },
          { id: "B", text: "(x - 49)(x + 1)" },
          { id: "C", text: "(x - 7)²" },
          { id: "D", text: "(x + 49)(x - 1)" }
        ],
        answer: "A",
        explanation: "Vì <span class=\"formula\">49 = 7²</span>, nên <span class=\"formula\">x² - 49 = (x - 7)(x + 7)</span>."
      },
      {
        id: "p3-q2",
        type: "true-false",
        prompt: "Mệnh đề sau đúng hay sai? <span class=\"formula\">a² - b² = (a - b)²</span>",
        options: [
          { id: "true", text: "Đúng" },
          { id: "false", text: "Sai" }
        ],
        answer: "false",
        explanation: "Sai. Công thức đúng là <span class=\"formula\">a² - b² = (a - b)(a + b)</span>."
      },
      {
        id: "p3-q3",
        type: "short-answer",
        prompt: "Điền vào chỗ trống: <span class=\"formula\">64 - y² = (8 - y)(8 + \u200b_____)</span>",
        acceptedAnswers: ["y", "+y"],
        answerDisplay: "y",
        explanation: "Vì <span class=\"formula\">64 = 8²</span>, nên thừa số còn lại là <span class=\"formula\">8 + y</span>."
      },
      {
        id: "p3-q4",
        type: "multiple-choice",
        prompt: "Kết quả phân tích <span class=\"formula\">9p² - 16q²</span> là:",
        options: [
          { id: "A", text: "(3p - 4q)²" },
          { id: "B", text: "(9p - 16q)(p + q)" },
          { id: "C", text: "(3p - 4q)(3p + 4q)" },
          { id: "D", text: "(3p + 4q)²" }
        ],
        answer: "C",
        explanation: "Ta có <span class=\"formula\">9p² - 16q² = (3p)² - (4q)² = (3p - 4q)(3p + 4q)</span>."
      },
      {
        id: "p3-q5",
        type: "true-false",
        prompt: "Hiệu hai bình phương có thể phân tích thành tích của tổng và hiệu hai căn thức.",
        options: [
          { id: "true", text: "Đúng" },
          { id: "false", text: "Sai" }
        ],
        answer: "true",
        explanation: "Đúng: <span class=\"formula\">a² - b² = (a - b)(a + b)</span>."
      }
    ]
  },
  {
    id: "cube-sum",
    number: "04",
    name: "Tổng hai lập phương",
    formula: "a³ + b³ = (a + b)(a² - ab + b²)",
    questions: [
      {
        id: "p4-q1",
        type: "multiple-choice",
        prompt: "Phân tích <span class=\"formula\">x³ + 8</span> thành nhân tử:",
        options: [
          { id: "A", text: "(x + 2)(x² - 2x + 4)" },
          { id: "B", text: "(x - 2)(x² + 2x + 4)" },
          { id: "C", text: "(x + 8)(x² - 8x + 64)" },
          { id: "D", text: "(x + 2)(x² + 2x + 4)" }
        ],
        answer: "A",
        explanation: "Vì <span class=\"formula\">8 = 2³</span>, áp dụng công thức tổng hai lập phương."
      },
      {
        id: "p4-q2",
        type: "true-false",
        prompt: "Mệnh đề sau đúng hay sai? <span class=\"formula\">a³ + b³ = (a + b)(a² + ab + b²)</span>",
        options: [
          { id: "true", text: "Đúng" },
          { id: "false", text: "Sai" }
        ],
        answer: "false",
        explanation: "Sai. Trong ngoặc thứ hai phải là <span class=\"formula\">a² - ab + b²</span>."
      },
      {
        id: "p4-q3",
        type: "short-answer",
        prompt: "Điền vào chỗ trống: <span class=\"formula\">27 + t³ = (3 + t)(9 - 3t + \u200b_____)</span>",
        acceptedAnswers: ["t2", "t²"],
        answerDisplay: "t²",
        explanation: "Theo công thức, số hạng cuối trong ngoặc là <span class=\"formula\">t²</span>."
      },
      {
        id: "p4-q4",
        type: "multiple-choice",
        prompt: "Phân tích <span class=\"formula\">8m³ + 125n³</span> thành nhân tử:",
        options: [
          { id: "A", text: "(2m + 5n)(4m² + 10mn + 25n²)" },
          { id: "B", text: "(2m + 5n)(4m² - 10mn + 25n²)" },
          { id: "C", text: "(2m - 5n)(4m² + 10mn + 25n²)" },
          { id: "D", text: "(8m + 125n)(m² - mn + n²)" }
        ],
        answer: "B",
        explanation: "Vì <span class=\"formula\">8m³ = (2m)³</span> và <span class=\"formula\">125n³ = (5n)³</span>."
      },
      {
        id: "p4-q5",
        type: "true-false",
        prompt: "Thừa số đầu tiên của tổng hai lập phương <span class=\"formula\">a³ + b³</span> là <span class=\"formula\">a + b</span>.",
        options: [
          { id: "true", text: "Đúng" },
          { id: "false", text: "Sai" }
        ],
        answer: "true",
        explanation: "Đúng. Công thức bắt đầu bằng thừa số <span class=\"formula\">a + b</span>."
      }
    ]
  },
  {
    id: "cube-difference",
    number: "05",
    name: "Hiệu hai lập phương",
    formula: "a³ - b³ = (a - b)(a² + ab + b²)",
    questions: [
      {
        id: "p5-q1",
        type: "multiple-choice",
        prompt: "Phân tích <span class=\"formula\">x³ - 27</span> thành nhân tử:",
        options: [
          { id: "A", text: "(x - 3)(x² + 3x + 9)" },
          { id: "B", text: "(x + 3)(x² - 3x + 9)" },
          { id: "C", text: "(x - 27)(x² + 27x + 729)" },
          { id: "D", text: "(x - 3)(x² - 3x + 9)" }
        ],
        answer: "A",
        explanation: "Vì <span class=\"formula\">27 = 3³</span>, áp dụng công thức hiệu hai lập phương."
      },
      {
        id: "p5-q2",
        type: "true-false",
        prompt: "Mệnh đề sau đúng hay sai? <span class=\"formula\">a³ - b³ = (a - b)(a² - ab + b²)</span>",
        options: [
          { id: "true", text: "Đúng" },
          { id: "false", text: "Sai" }
        ],
        answer: "false",
        explanation: "Sai. Với hiệu hai lập phương, số hạng giữa trong ngoặc là <span class=\"formula\">+ab</span>."
      },
      {
        id: "p5-q3",
        type: "short-answer",
        prompt: "Điền vào chỗ trống: <span class=\"formula\">64 - p³ = (4 - p)(16 + 4p + \u200b_____)</span>",
        acceptedAnswers: ["p2", "p²"],
        answerDisplay: "p²",
        explanation: "Vì <span class=\"formula\">64 = 4³</span>, số hạng cuối là <span class=\"formula\">p²</span>."
      },
      {
        id: "p5-q4",
        type: "multiple-choice",
        prompt: "Phân tích <span class=\"formula\">27u³ - 8v³</span> thành nhân tử:",
        options: [
          { id: "A", text: "(3u - 2v)(9u² - 6uv + 4v²)" },
          { id: "B", text: "(3u + 2v)(9u² - 6uv + 4v²)" },
          { id: "C", text: "(3u - 2v)(9u² + 6uv + 4v²)" },
          { id: "D", text: "(27u - 8v)(u² + uv + v²)" }
        ],
        answer: "C",
        explanation: "Vì <span class=\"formula\">27u³ = (3u)³</span> và <span class=\"formula\">8v³ = (2v)³</span>."
      },
      {
        id: "p5-q5",
        type: "true-false",
        prompt: "Trong công thức <span class=\"formula\">a³ - b³</span>, dấu của số hạng giữa trong ngoặc thứ hai là dấu cộng.",
        options: [
          { id: "true", text: "Đúng" },
          { id: "false", text: "Sai" }
        ],
        answer: "true",
        explanation: "Đúng: <span class=\"formula\">a³ - b³ = (a - b)(a² + ab + b²)</span>."
      }
    ]
  },
  {
    id: "cube-sum-advanced",
    number: "06",
    name: "Nhận diện tổng hai lập phương",
    formula: "a³ + b³ = (a + b)(a² - ab + b²)",
    questions: [
      {
        id: "p6-q1",
        type: "multiple-choice",
        prompt: "Biểu thức nào là tổng hai lập phương?",
        options: [
          { id: "A", text: "8x³ - 27y³" },
          { id: "B", text: "27p³ + 64q³" },
          { id: "C", text: "9m² + 16n²" },
          { id: "D", text: "a² - b²" }
        ],
        answer: "B",
        explanation: "<span class=\"formula\">27p³ + 64q³ = (3p)³ + (4q)³</span>, là tổng hai lập phương."
      },
      {
        id: "p6-q2",
        type: "true-false",
        prompt: "Mệnh đề sau đúng hay sai? <span class=\"formula\">8x³ + 1 = (2x + 1)(4x² - 2x + 1)</span>",
        options: [
          { id: "true", text: "Đúng" },
          { id: "false", text: "Sai" }
        ],
        answer: "true",
        explanation: "Đúng vì <span class=\"formula\">8x³ = (2x)³</span> và <span class=\"formula\">1 = 1³</span>."
      },
      {
        id: "p6-q3",
        type: "short-answer",
        prompt: "Điền vào chỗ trống: <span class=\"formula\">125a³ + 8b³ = (5a + 2b)(25a² - 10ab + \u200b_____)</span>",
        acceptedAnswers: ["4b2", "4b²", "4b^2"],
        answerDisplay: "4b²",
        explanation: "Bình phương của số hạng thứ hai là <span class=\"formula\">(2b)² = 4b²</span>."
      },
      {
        id: "p6-q4",
        type: "multiple-choice",
        prompt: "Kết quả đúng của <span class=\"formula\">27r³ + s³</span> là:",
        options: [
          { id: "A", text: "(3r + s)(9r² - 3rs + s²)" },
          { id: "B", text: "(3r - s)(9r² + 3rs + s²)" },
          { id: "C", text: "(3r + s)(9r² + 3rs + s²)" },
          { id: "D", text: "(27r + s)(r² - rs + s²)" }
        ],
        answer: "A",
        explanation: "Áp dụng tổng hai lập phương với <span class=\"formula\">a = 3r</span> và <span class=\"formula\">b = s</span>."
      },
      {
        id: "p6-q5",
        type: "true-false",
        prompt: "Khi phân tích tổng hai lập phương, ngoặc thứ hai có dạng <span class=\"formula\">a² - ab + b²</span>.",
        options: [
          { id: "true", text: "Đúng" },
          { id: "false", text: "Sai" }
        ],
        answer: "true",
        explanation: "Đúng. Đây là dấu hiệu cần nhớ của tổng hai lập phương."
      }
    ]
  },
  {
    id: "cube-difference-advanced",
    number: "07",
    name: "Nhận diện hiệu hai lập phương",
    formula: "a³ - b³ = (a - b)(a² + ab + b²)",
    questions: [
      {
        id: "p7-q1",
        type: "multiple-choice",
        prompt: "Kết quả đúng của <span class=\"formula\">8m³ - 125n³</span> là:",
        options: [
          { id: "A", text: "(2m - 5n)(4m² + 10mn + 25n²)" },
          { id: "B", text: "(2m + 5n)(4m² - 10mn + 25n²)" },
          { id: "C", text: "(2m - 5n)(4m² - 10mn + 25n²)" },
          { id: "D", text: "(8m - 125n)(m² + mn + n²)" }
        ],
        answer: "A",
        explanation: "Vì <span class=\"formula\">8m³ = (2m)³</span> và <span class=\"formula\">125n³ = (5n)³</span>."
      },
      {
        id: "p7-q2",
        type: "true-false",
        prompt: "Mệnh đề sau đúng hay sai? <span class=\"formula\">64x³ - 1 = (4x - 1)(16x² + 4x + 1)</span>",
        options: [
          { id: "true", text: "Đúng" },
          { id: "false", text: "Sai" }
        ],
        answer: "true",
        explanation: "Đúng vì <span class=\"formula\">64x³ = (4x)³</span> và <span class=\"formula\">1 = 1³</span>."
      },
      {
        id: "p7-q3",
        type: "short-answer",
        prompt: "Điền vào chỗ trống: <span class=\"formula\">216x³ - 27y³ = (6x - 3y)(36x² + 18xy + \u200b_____)</span>",
        acceptedAnswers: ["9y2", "9y²", "9y^2"],
        answerDisplay: "9y²",
        explanation: "Bình phương của số hạng thứ hai là <span class=\"formula\">(3y)² = 9y²</span>."
      },
      {
        id: "p7-q4",
        type: "multiple-choice",
        prompt: "Biểu thức nào sau đây phân tích đúng?",
        options: [
          { id: "A", text: "a³ - 8 = (a - 2)(a² + 2a + 4)" },
          { id: "B", text: "a³ - 8 = (a + 2)(a² - 2a + 4)" },
          { id: "C", text: "a³ - 8 = (a - 2)(a² - 2a + 4)" },
          { id: "D", text: "a³ - 8 = (a + 8)(a² + 8a + 64)" }
        ],
        answer: "A",
        explanation: "Vì <span class=\"formula\">8 = 2³</span>, nên dùng công thức hiệu hai lập phương."
      },
      {
        id: "p7-q5",
        type: "true-false",
        prompt: "Để nhận diện hiệu hai lập phương, biểu thức phải có dạng <span class=\"formula\">a³ - b³</span>.",
        options: [
          { id: "true", text: "Đúng" },
          { id: "false", text: "Sai" }
        ],
        answer: "true",
        explanation: "Đúng. Sau khi nhận diện dạng này, dùng <span class=\"formula\">(a - b)(a² + ab + b²)</span>."
      }
    ]
  }
];

window.formulaPlanets = formulaPlanets;
