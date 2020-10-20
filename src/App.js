import React from "react";
import "./App.css";
import avatar from "./images/avatar.png";
import Button from "./components/Button";
function App() {
  return (
    <div className="App">
      {/* left */}
      <div className="actions">
        <div>
        <div className="header">
          <img className="img" src={avatar} />
          <i class="far fa-question-circle"></i>
        </div>
        <div className="content">
          <h3>What's the goal?</h3>
          <p>
            Single goal <i class="fas fa-chevron-down icon-chevron-down"></i>
          </p>
          <div className="goals">
            <Button
              text="Reserve Dinner"
              fill="#59a9c2"
              color="#fff"
              contained
              className="reserve-dinner"
            />
            <Button
              text="Plan a vacation"
              fill="#fff"
              color="#000"
              contained
              className="plan-vacation"
            />
            <Button
              text="Pay for tickets"
              fill="#fff"
              color="#000"
              contained
              className="pay-tickets"
            />
            <span className="show-more">Show More</span>
          </div>
        </div>
        </div>
        <div className="footer">
          <div className="buttons-footer">
            <Button text="Can't proceed" color="#000" className="proceed" />
            <Button
              text="Confirm goals"
              fill="#000"
              color="#fff"
              contained
              className="confirm-goals"
            />
          </div>
        </div>
      </div>
      {/* right  */}
      <div className="messages">
        {/* message and avatar */}
        <div className="message">
          <img className="img" src={avatar} />
          <p className="message-content">
            Lorem Ipsum is simply dummy{" "}
            <span className="underline">text of the printing</span> and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book.
          </p>
        </div>
        {/* message box */}
        <div className="message-box">
          <input type="text" placeholder="Type a Message" />
        </div>
      </div>
    </div>
  );
}

export default App;
