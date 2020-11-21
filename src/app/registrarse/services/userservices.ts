import { Injectable } from '@angular/core';

import { PlaylistUser } from '../../models/playlist';
import { User } from '../../models/user';
import { Like } from '../../models/like';
import { AllPlaylistUser } from '../../models/allPlaylist';
@Injectable({
    providedIn: 'root'
})

export class userService {

    users: User[];
    playlistUsers: PlaylistUser[];
    likeSongs: Like[];
    allPlaylistUsers: AllPlaylistUser[];

    constructor() {
        /* this.users =[
            {name:"Angel" ,email:"email@gmail.com", password:"124"},
            {name:"Osmin" ,email:"email1@gmail.com", password:"124w"}
        ] */
    }

    getUser() {
        if (localStorage.getItem('users') === null) {
            this.users = [];
        } else {
            this.users = JSON.parse(localStorage.getItem('users'));
        }
        return this.users;
    }


    addUser(user: User) {
        this.users.push(user);
        let users = [];
        if (localStorage.getItem('users') === null) {
            users = [];
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));
        }
        else {
            users = JSON.parse(localStorage.getItem('users'));
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));
        }

    }
    addAllPlaylist(allPlaylistUser: AllPlaylistUser) {
        this.allPlaylistUsers.push(allPlaylistUser);
        let allPlaylistUsers = [];
        if (localStorage.getItem('allPlaylistUsers') === null) {
            allPlaylistUsers = [];
            allPlaylistUsers.push(allPlaylistUser);
            localStorage.setItem('allPlaylistUsers', JSON.stringify(allPlaylistUsers))
        } else {
            allPlaylistUsers = JSON.parse(localStorage.getItem('allPlaylistUsers'));
            allPlaylistUsers.push(allPlaylistUser);
            localStorage.setItem('allPlaylistUsers', JSON.stringify(allPlaylistUsers))
        }
    }
    getAllPlaylist() {
        if (localStorage.getItem('allPlaylistUsers') === null) {
            this.allPlaylistUsers = []; 
        } else {
            
            this.allPlaylistUsers = JSON.parse(localStorage.getItem('allPlaylistUsers'));
        }
        return this.allPlaylistUsers;
    }


    addPlaylist(playlistUser: PlaylistUser) {/* 
        this.playlistUsers.push(playlistUser); */
        let playlistUsers = [];
        if (localStorage.getItem('playlistUsers') === null) {
            playlistUsers = [];
            playlistUsers.push(playlistUser);
            localStorage.setItem('playlistUsers', JSON.stringify(playlistUsers));
        }
        else {
            playlistUsers = JSON.parse(localStorage.getItem('playlistUsers'));
            playlistUsers.push(playlistUser);
            localStorage.setItem('playlistUsers', JSON.stringify(playlistUsers));
        }
    }
    addLike(likeSong: Like) {
        let likeSongs = [];
        if (localStorage.getItem('likeSongs') === null) {
            likeSongs = [];
            likeSongs.push(likeSong);
            localStorage.setItem('likeSongs', JSON.stringify(likeSongs));
        }
        else {
            likeSongs = JSON.parse(localStorage.getItem('likeSongs'));
            likeSongs.push(likeSong);
            localStorage.setItem('likeSongs', JSON.stringify(likeSongs))
        }
    }
    getPlaylist() {
        if (localStorage.getItem('playlistUsers') === null) {
            this.playlistUsers = [];

        } else {
            this.playlistUsers = JSON.parse(localStorage.getItem('playlistUsers'))
        }
        return this.playlistUsers;
    }

}