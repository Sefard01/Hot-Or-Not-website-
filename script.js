
    // Array to hold image URLs
    const images = [
            "1.jpeg",
            "2.jpeg",
            "3.jpeg",
            "4.jpeg",
            "5.jpeg",
            "9.webp",
            "10.webp",
            "11.webp",
            "12.webp",
            "13.webp",
            "14.webp",
            "15.webp",
            "16.webp",
            "17.webp",
            "18.webp",
            "19.webp",
            "20.webp",
            "21.webp",
            "23.webp",
            "22.webp",
            "24.webp",
            "25.webp",
            "26.webp",
            "27.webp",
            "28.webp",
            "29.webp",
            "30.webp",
            "31.webp",
            "32.webp",
            "33.webp",
            "34.webp",
            "35.webp",
            "36.webp",
            "37.webp",
            "38.webp",
            "39.webp",
            "40.webp",
            "41.webp",
            "42.webp",
            "43.webp",
            "44.webp",
            "45.webp",
            "46.webp",
            "47.webp",
            "48.webp",
            "49.webp",
            "50.webp",
            "51.webp",
            "52.webp",
            "53.webp",
            "54.webp",
            "55.webp",
            "56.webp",
            "57.webp",
            "58.webp",
            "59.webp",
            "60.webp",
            "61.webp",
            "62.webp",
            "63.webp",
            "64.webp",
            "65.webp",
            "66.webp",
            "67.webp",
            "68.webp",
            "69.webp",
            "70.webp",
            "71.webp",
            "72.webp",
            "73.webp",
            "74.webp",
            "75.webp",
            "76.webp",
            "78.webp",
            "79.webp",
            "80.jpeg",
            "81.webp",
            "82.webp",
            "83.webp",
            "84.webp",
            "85.webp",
            "86.webp",
            "87.webp",
            "88.webp",
            "89.webp",
            "90.webp",
            "92.webp",
            "91.webp",
            "93.webp",
            "94.webp",
            "95.webp",
            "96.webp",
            "97.webp",
            "98.webp",
            "99.webp",
            "100.webp",
            "101.webp",
            "102.webp",
            "103.webp",
            "104.webp",
            "105.webp",
            "106.webp",
            "107.webp",
            "108.webp",
            "109.webp",
            "110.webp",
            "111.webp",
            "112.webp",
            "113.webp",
            "114.webp",
            "115.webp",
            "116.webp",
            "117.webp",
            "118.webp",
            "119.webp",
            "120.webp",
            "121.webp",
            "122.webp",
            "123.webp",
            "124.webp",
            "125.webp",
            "126.webp",
            "127.webp",
            "128.webp",
            "129.webp",
            "130.webp",
            "131.webp",
            "132.webp",
            "133.webp",
            "134.webp",
            "135.webp",
            "136.webp",
            "137.webp",
            "138.webp",
            "139.webp",
            "140.webp",
            "141.webp",
            "142.webp",
            "143.jpg",
            "144.jpg",
            "145.jpg",
            "146.jpg",
            "147.jpg",
            "148.jpg",
            "149.jpg",
            "150.webp",
            "151.jpeg",
            "152.jpeg",
            "153.jpeg",
            "154.jpeg",
            "155.jpeg",
            "156.jpeg",
            "157.jpeg",
            "158.jpeg",
            "159.jpeg",
            "160.webp",
            "161.jpg",
            "162.jpg",
            "163.jpg",
            "164.jpg",
            "164.webp",
            "165.webp",
            "166.webp",
            "167.webp",
            "168.webp",
            "169.webp",
            "170.webp",
            "171.webp",
            "172.webp",
            "173.webp",
            "174.webp",
            "175.webp",
            "176.webp",
            "177.webp" ,
            "178.webp"
           
            
            
            
            
            // Add more images as needed
        ];
;
    // Initialize indices for current and next images
    
    let currentImageIndex = 0;
    let nextImageIndex = 1;

    // Function to load the initial comparison
    function loadComparison() {
      document.getElementById('image1').src = images[currentImageIndex];
      document.getElementById('image2').src = images[nextImageIndex];
    }

    // Function to handle voting
    function voteImage(selectedImage) {
      if (selectedImage === 1) {
        // Keep image1, update image2 to the next image
        currentImageIndex = currentImageIndex;
        nextImageIndex++;
        
      } else {
        // Move image2 to image1 and load the next image in image2
        currentImageIndex = nextImageIndex;
        nextImageIndex++;
       
        
      }

      // Reset to the start if we reach the end of the image array
      if (nextImageIndex >= images.length) {
        nextImageIndex = 0;
      }

      // Load the new images
      loadComparison();
    }

    // Load the initial comparison on page load
    
    loadComparison();