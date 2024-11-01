const ulElement = document.getElementById("list");
        const inputElement = document.getElementById("input");

        inputElement.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                addTodo();
            }
        });

        function addTodo() {
            const inputValue = inputElement.value.trim();

            if (inputValue) {
                const liElement = document.createElement("li");
                const liText = document.createTextNode(inputValue);
                liElement.appendChild(liText);

                // Create action buttons container
                const actionsDiv = document.createElement("div");
                actionsDiv.className = "todo-actions";

                // Delete button
                const delBtnElement = document.createElement("button");
                delBtnElement.className = "delete";
                delBtnElement.textContent = "Delete";
                delBtnElement.onclick = () => liElement.remove();
                actionsDiv.appendChild(delBtnElement);

                // Edit button
                const editBtnElement = document.createElement("button");
                editBtnElement.className = "edit";
                editBtnElement.textContent = "Edit";
                editBtnElement.onclick = () => editSingleTodo(liElement);
                actionsDiv.appendChild(editBtnElement);

                liElement.appendChild(actionsDiv);
                ulElement.appendChild(liElement);
                inputElement.value = "";
            } else {
                alert("Please enter a task.");
            }
        }

        function deleteAllTodos() {
            ulElement.innerHTML = "";
        }

        function editSingleTodo(liElement) {
            const currentValue = liElement.firstChild.nodeValue;
            const updateVal = prompt("Enter updated value:", currentValue);

            if (updateVal && updateVal.trim()) {
                liElement.firstChild.nodeValue = updateVal;
            }
        }