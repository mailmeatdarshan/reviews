const reviews = [
    {
      id: 1,
      name: "Susan Smith",
    //   job: "web developer",
      img:
        "https://i.pinimg.com/736x/39/8d/56/398d56167d054d8e75992a45311c5e95.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "Anna Johnson",
    //   job: "web designer",
      img:
        "https://i.pinimg.com/1200x/de/58/cf/de58cf149bac7411b2f741ad3c808998.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "Peter Jones",
    //   job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "Bill Anderson",
    //   job: "the boss",
      img:
        "https://i.pinimg.com/1200x/cf/d6/a7/cfd6a73905f2499122b9ce22cedd3c96.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
    {
      id: 5,
      name: "Tokyo",
    //   job: "the boss",
      img:
        "https://i.pinimg.com/736x/2a/31/de/2a31de108bf780d3219add7b45687804.jpg",
      text:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae sequi repellendus asperiores exercitationem nesciunt quidem. Soluta nihil iure et ducimus amet a rem nemo quidem excepturi, eius, nisi impedit expedita?",
    },
  ];

    const img = document.getElementById("person-img");
    const author = document.getElementById("person-name");
    // const job = document.getElementById("job");
    const info = document.getElementById("text");

    const prevBtn = document.querySelector(".left-button");
    const nextBtn = document.querySelector(".right-button");
    // const randomBtn = document.querySelector(".random-btn");

    let currentItem = 0;

// load initial item
    window.addEventListener("DOMContentLoaded", function () {
        const item = reviews[currentItem];
        img.src = item.img;
        author.textContent = item.name;
        // job.textContent = item.job;
        info.textContent = item.text;
    });

    // show person based on item
    function showPerson(person) {
        const item = reviews[person];
        img.src = item.img;
        author.textContent = item.name;
        // job.textContent = item.job;
        info.textContent = item.text;
    }
    // show next person
    nextBtn.addEventListener("click", function () {
        currentItem++;
        if (currentItem > reviews.length - 1) {
            currentItem = 0;
        }
        showPerson(currentItem);
    });
    // show prev person
    prevBtn.addEventListener("click", function () {
        currentItem--;
        if (currentItem < 0) {
            currentItem = reviews.length - 1;
        }
        showPerson(currentItem);
    });