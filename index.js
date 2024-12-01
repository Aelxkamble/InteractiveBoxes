// Get all boxes
const boxes = document.querySelectorAll(".box");

// Add click event to toggle box content
boxes.forEach((box) => {
  const header = box.querySelector(".box-header");
  header.addEventListener("click", () => {
    // Close other boxes
    boxes.forEach((b) => {
      if (b !== box) {
        b.querySelector(".box-content").classList.remove("active");
        b.querySelector(".box-content").style.display = "none";
        b.style.border = "none"; // Remove border from other boxes
      }
    });

    // Toggle current box
    const content = box.querySelector(".box-content");
    if (content.style.display === "block") {
      content.style.display = "none";
      box.style.border = "none"; // Remove border when closing
    } else {
      content.style.display = "block";
      box.style.border = "2px solid #FF6B82"; // Add border when opening
    }
  });
});

// Open the middle box (#box-2) on page load
const middleBox = document.querySelector("#box-2 .box-content");
middleBox.classList.add("active");
middleBox.style.display = "block";
document.querySelector("#box-2").style.border = "2px solid #FF6B82"; // Add border on page load
