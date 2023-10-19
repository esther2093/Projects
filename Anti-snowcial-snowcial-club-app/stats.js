const statsChart = echarts.init(document.getElementById("statsChart"));
statsChart.showLoading();

const numUsers = new Set(posts.map(post => post.username)).size;
const numPosts = posts.length;

const options3 = {
    title: {
        text: "Website Statistics",
    },
    xAxis: {
        type: "category",
        data: ["Users", "Posts"],
    },
    yAxis: {},
    series: [
        {
            name: "Count",
            type: "bar",
            data: [numUsers, numPosts],
        },
    ],
    legend: {
       orient: "horizontal",
       right: 'right',
     },
     color: [
        '#083D77',
    ]
};

statsChart.hideLoading();
statsChart.setOption(options3);


//Number of posts by user
const numberofUserPostChart = echarts.init(  document.getElementById("numberofUserPostChart"));
numberofUserPostChart.showLoading();

function getUsernameData() {
  const userName = [];

  posts.forEach((post) => {
    let sameUsername = userName.find(
      (postUsername) => postUsername.name == post.username
    );
    if (sameUsername) {
      sameUsername.value++;
    } else {
      sameUsername = { value: 1, name: post.username };
    }

    let index =
      userName.indexOf(sameUsername) >= 0
        ? userName.indexOf(sameUsername)
        : userName.length;
    userName[index] = sameUsername;
  });

  console.log(userName);
  return userName;
}

const usernameData = getUsernameData();
const options = {
  title: {
    text: "Number of Posts by Each User",
  },
  xAxis: {
    type: "category",
    data: usernameData.map((users) => users.name),
    axisLabel: {
        rotate: 30
      },
  },
  yAxis: {},
  series: [
    {
      name: "Posts",
      type: "bar",
      data: usernameData.map((users) => users.value),
    },
  ],
  legend: {
    orient: "horizontal",
    right: 'right',
    top: 0,
  },
  color: [
    '#805D93',
]
};

numberofUserPostChart.hideLoading();
numberofUserPostChart.setOption(options);


//Number of posts in each category
const numberofPostChart = echarts.init(document.getElementById("numberofPostChart"));
numberofPostChart.showLoading();

function getCategoryData() {
    const categoryCounts = {};

    posts.forEach(post => {
        post.category.forEach(category => {
            if (categoryCounts[category]) {
                categoryCounts[category]++;
            } else {
                categoryCounts[category] = 1;
            }
        });
    });

    return categoryCounts;
}

const categoryData = getCategoryData();

const options1 = {
  title: {
    text: "Number of Posts in Each Category",
  },
  xAxis: {
    type: "category",
    data: Object.keys(categoryData),
    axisLabel: {
        rotate: 30
      },
  },
  yAxis: {},
  series: [
    {
      name: "Posts",
      type: "bar",
      data: Object.values(categoryData),
    },
  ],
  legend: {
    orient: "horizontal",
    right: 'right',
    top: 0,
  },
  color: [
    '4493e2',
]
};

numberofPostChart.hideLoading();
numberofPostChart.setOption(options1);


//Average price of each category 
const averagePriceChart = echarts.init(document.getElementById("averagePriceChart"));
averagePriceChart.showLoading();

function calculateAveragePricesByCategory() {
  const categoryData = {};

  posts.forEach((post) => {
    const category = post.category[0]; 
    const price = parseFloat(post.price);

    if (!categoryData[category]) {
      categoryData[category] = {
        totalSum: price,
        totalCount: 1,
      };
    } else {
      categoryData[category].totalSum += price;
      categoryData[category].totalCount++;
    }
  });

  const averagePrices = {};
  for (const category in categoryData) {
    averagePrices[category] =
      categoryData[category].totalSum / categoryData[category].totalCount;
  }

  return averagePrices;
}

const averagePricesByCategory = calculateAveragePricesByCategory();

const options2 = {
  title: {
    text: "Average Cost of Items by Category",
  },
  xAxis: {
    type: "category",
    data: Object.keys(averagePricesByCategory),
    axisLabel: {
        rotate: 30
      },
  },
  yAxis: {},
  series: [
    {
      name: "Average Cost",
      type: "bar",
      data: Object.values(averagePricesByCategory),
    },
  ],
  legend: {
    orient: "horizontal",
    right: 'right',
    top: 0,
  },
  color: [
    'f4e76e',
]
};

averagePriceChart.hideLoading();
averagePriceChart.setOption(options2);




