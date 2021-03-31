var names_array = ["Ashok", "jiya", "Nirmala", "Shourya","Sween"];
                var images_array = ["ashok.jpeg", "jiya.jpeg","nirmala.jpeg","shourya.jpeg","sween.jpeg"];
                var i = 0;

                function next() {
                    document.getElementById("image").src = images_array[i];
                    document.getElementById("name").textContent = names_array[i];
                    i++;
                    if(i==5) {
                        i=0;
                    }
                };