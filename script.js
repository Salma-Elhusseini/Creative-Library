// navbar responsive in all html
const navbar = document.querySelector(".navbar");
const bars = document.querySelector(".fa-bars");
const xmark = document.querySelector(".fa-xmark");
const humburgerMenu = document.querySelector(".humburger");

if (navbar && bars && xmark && humburgerMenu) {
  humburgerMenu.addEventListener("click", () => {
    bars.classList.toggle("active");
    xmark.classList.toggle("active");
    navbar.classList.toggle("active");
  });
}

// sign up and login in overlay in index.html
const signUpBtn = document.getElementById("sign-up");
const loginInBtn = document.getElementById("login-in");
const signUpCard = document.querySelector(".sign-up");
const loginInCard = document.querySelector(".login-in");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelectorAll(".close-btn");

if (signUpBtn && loginInBtn && signUpCard && loginInCard && overlay) {
  signUpBtn.addEventListener("click", () => {
    signUpCard.classList.remove("hidden");
    overlay.classList.remove("hidden");
    document.body.classList.add("no-scroll");
  });

  loginInBtn.addEventListener("click", () => {
    loginInCard.classList.remove("hidden");
    overlay.classList.remove("hidden");
    document.body.classList.add("no-scroll");
  });
  overlay.addEventListener("click", () => {
    signUpCard.classList.add("hidden");
    loginInCard.classList.add("hidden");
    overlay.classList.add("hidden");
    document.body.classList.remove("no-scroll");
  });

  closeBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      signUpCard.classList.add("hidden");
      loginInCard.classList.add("hidden");
      overlay.classList.add("hidden");
      document.body.classList.remove("no-scroll");
    });
  });
}

//quotes in books.html
const quotes = [
  {
    text: "A room without books is like a body without a soul.",
    author: "By Marcus Tullius Cicero"
  },
  {
    text: "So many books, so little time.",
    author: "By Frank Zappa"
  },
  {
    text: "The only thing that you absolutely have to know, is the location of the library.",
    author: "By Albert Einstein"
  },
  {
    text: "It is never too late to be what you might have been.",
    author: "By George Eliot"
  },
  {
    text: "To be or not to be, that is the question.",
    author: "By William Shakespeare"
  }
];

let currentIndex = 0;

const quoteBox = document.querySelector(".quote1");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

if (quoteBox) {
  function showQuote(index) {
    quoteBox.classList.add("fade-out");

    setTimeout(() => {
      quoteBox.innerHTML = `
      "${quotes[index].text}" <br>
      <span>${quotes[index].author}</span>
    `;
      quoteBox.classList.remove("fade-out");
    }, 1000);
  }

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % quotes.length;
    showQuote(currentIndex);
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + quotes.length) % quotes.length;
    showQuote(currentIndex);
  });

  setInterval(() => {
    currentIndex = (currentIndex + 1) % quotes.length;
    showQuote(currentIndex);
  }, 10000);

  showQuote(currentIndex);
}

// message successfull in contact.html
const form = document.getElementById("contact-form");
const msgSuccess = document.getElementById("success-message");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    msgSuccess.classList.remove("hidden");

    form.reset();

    setTimeout(() => {
      msgSuccess.classList.add("hidden");
    }, 3000);
  });
}

// page details book in books.html
const detailsButtons = document.querySelectorAll("#details-btn");

if (detailsButtons) {
  detailsButtons.forEach((b) => {
    b.addEventListener("click", () => {
      const bookData = {
        img: b.dataset.img,
        title: b.dataset.title,
        author: b.dataset.author
      };
      localStorage.setItem("selectedBook", JSON.stringify(bookData));

      window.location.href = "details.html";
    });
  });
}

// load book details in details.html
const book = localStorage.getItem("selectedBook");

if (book) {
  const bookData = JSON.parse(book);

  document.getElementById("bookImg").src = bookData.img;
  document.getElementById("bookTitle").textContent = bookData.title;
  document.getElementById("bookAuthor").textContent =
    "By " + bookData.author;
}

// read book external link in details.html
const readBtn = document.getElementById("readBtn");

if (readBtn) {
  document.getElementById("readBtn").addEventListener("click", () => {
    window.open("www.aseeralkotb.com", "_blank");
  });
}