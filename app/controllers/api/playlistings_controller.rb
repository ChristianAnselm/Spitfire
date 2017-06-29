class Api::PlaylistingsController < ApplicationController

  def create
    @playlisting = Playlisting.new(playlisting_params)
    @playlist = Playlist.find(@playlisting.playlist_id)
    @playlisting.ord = Playlisting.last.ord + 1
    @playlisting.save
    render json: {}
  end

  def destroy
    @playlisting = Playlisting.find(params[:id])
    @playlist = Playlist.find(@playlisting.playlist_id)
    @playlisting.delete
    render "api/playlists/show"
  end

  def kill
    @playlist = Playlist.find(params[:playlist_id].to_i)
    @playlist.tracks[params[:playlist_ord].to_i].delete
    render "api/playlists/show"
  end

  def playlisting_params
    params.require(:playlisting).permit(:playlist_id, :track_id)
  end
end