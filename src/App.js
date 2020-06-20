import React, {Component} from 'react';
import GuestList from "./GuestList"


class App extends Component{

  state = {
    guests: [
      {
        name: "George",
        isConfirmed: false,
        isEditting: false
      },
      {
        name: "Tom",
        isConfirmed: true,
        isEditing: false 
      }
    ]
  }

  toggleFunc =(property, indexToChange) => 
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if(index === indexToChange){
          return {
            ...guest,
            [property]: !guest[property]
          }
        }
        return guest;
      })
    })
  
  toggleConfirmation = index => this.toggleFunc("isConfirmed", index)

  toggleEdit = index => this.toggleFunc("isEditing", index)

  setName = (name, indexToChange) =>
    this.setState({
      guest: this.state.guests.map((guest, index) => {
        if(index === indexToChange){
          return {
            ...guest,
            name
          }
        }
        return guest;
      }
      )
    })

  getTotalGuestNum = () => this.state.guests.length;
  getAttendGuestNum = () => this.state.guests.filter(guest => guest.isConfirmed).length
  getUnconfirmedGuest = () => this.state.guests.filter(guest => !guest.isConfirmed).length

  render(){
    return (
      <div className="App">
        <header>
          <h1>RSVP</h1>
          <p>A Treehouse App</p>
          <form>
              <input type="text" value="Safia" placeholder="Invite Someone" />
              <button type="submit" name="submit" value="submit">Submit</button>
          </form>
        </header>
        <div className="main">
          <div>
            <h2>Invitees</h2>
            <label>
              <input type="checkbox" /> Hide those who haven't responded
            </label>
          </div>
          <table className="counter">
            <tbody>
              <tr>
                <td>Attending:</td>
                <td>{this.getAttendGuestNum()}</td>
              </tr>
              <tr>
                <td>Unconfirmed:</td>
                <td>{this.getUnconfirmedGuest()}</td>
              </tr>
              <tr>
                <td>Total:</td>
                <td>{this.getTotalGuestNum()}</td>
              </tr>
            </tbody>
          </table>
          <GuestList 
            guests={this.state.guests}
            toggleConfirmation={this.toggleConfirmation}
            toggleEdit={this.toggleEdit}
            setName={this.setName} />
          {/*<ul>  
             <li className="responded"><span>Iver</span>
              <label>
                <input type="checkbox" checked /> Confirmed
              </label>
              <button>edit</button>
              <button>remove</button>
            </li>
            <li className="responded">
              <span>Corrina</span>
              <label>
                <input type="checkbox" checked /> Confirmed
              </label>
              <button>edit</button>
              <button>remove</button>
            </li>
            <li>
              <span>Joel</span>
              <label>
                <input type="checkbox" /> Confirmed
              </label>
              <button>edit</button>
              <button>remove</button>
            </li> 
          </ul>*/}
        </div>
      </div>
    );
  }
}

export default App;
