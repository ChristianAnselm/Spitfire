import React from 'react';
import { Link } from 'react-router-dom';
import PlaylistShow from './playlist_show';
import Modal from '../modal/modal';

class Playlists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      playlist: {
        name: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    const playlists = this.props.playlists

    return (
      <section  className='main'>

          <div className='new-playlist'>
            <button onClick={()=>this.openModal()}>NEW PLAYLIST</button>
            <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
              <section className='new-playlist-form'>
                <div>
                  <h1>Create new playlist</h1>
                </div>
                <label className='new-playlist-name'>
                  <input
                    onChange={this.handleChange('name')}
      							placeholder='Start typying...'
      							value={this.state.name} />
                </label>
      					<div className='modal-buttons' >
                  <button onClick={() => this.closeModal()}>CANCEL</button>
      	          <button onClick={e => this.handleSubmit(e)}>CREATE</button>
      					</div>
              </section>
            </Modal>
          </div>

        <section className='playlist-section'>
          {
            playlists.map(playlist =>
            <div key={playlist.id} className='playlist-item'>
              <img className='playlist-image' src={playlist.image_url}/>
              <h1><Link to={`/playlists/${playlist.id}`}>{playlist.name}</Link></h1>
              <h2 className='creator'>{playlist.creator}</h2>
            </div>)
          }
        </section>

      </section>
    );
  }

  openModal() {
    this.setState({ isModalOpen: true });
  }

  closeModal() {
    this.setState({ isModalOpen: false });
  }

  handleChange(field) {
    return e => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  handleSubmit() {
    e.preventDefault();
    const playlist = Object.assign({}, this.state.playlist);
    this.props.createPlaylist(playlist)
  }
}

export default Playlists;
