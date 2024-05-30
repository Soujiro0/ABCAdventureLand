import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Profile } from './../models/profile';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {
  // Adding private accounts variable as BehaviorSubject
  private _accounts = new BehaviorSubject<Profile[]>([]);
  // Getter for accounts
  get accounts() {
    return this._accounts.asObservable();
  }

  currentLoginProfile!: Profile;

  constructor() { }

  getAccountById() {}

  async getAccounts() {
    try {
      // // dataRef: get the collection in firebase (The Integrated firestore, The name of collection in database)
      // const dataRef: any = collection(this.firestore, 'anime-list');
      // // Using getDocs(), passing the argument dataRef to query to database
      // const querySnapshot = await getDocs(dataRef);

      // const anime: Anime[] = await querySnapshot.docs.map((doc) => {
      //   // Get Data one by one in variable item
      //   let item: any = doc.data();
      //   console.log(item);
      //   item.id = doc.id;
      //   return item;
      // });
      // this._animeList.next(anime);
      return [];
    } catch (e) {
      throw(e);
    }
  }

  async addProfile(profile: Profile) {
    try {
      // const dataRef: any = collection(this.firestore, 'anime-list');
      // const response = await addDoc(dataRef, anime);
      // const id = await response?.id;

      // const currentAnimelist = this._animeList.value;
      // const newId = id;
      const currentAccounts = this._accounts.value;
      const newId = (currentAccounts.length + 1).toString();
      let newProfile: Profile[] = [{...profile, id: newId}];
      newProfile = newProfile.concat(currentAccounts);
      this._accounts.next(newProfile);
      return profile;
    } catch (e) {
      throw(e);
    }
  }

  async updateProfile(id: string, profile: any) {
    try {
      // const dataRef = await doc(this.firestore, `anime-list/${id}`);
      // await updateDoc(dataRef, anime);

      let currentAccounts = this._accounts.value;
      const idx = currentAccounts.findIndex((x) => {
        return x.id == id;
      });
      const latestData = {...profile, id};
      currentAccounts[idx] = latestData;
      this._accounts.next(currentAccounts);
      return latestData;
    } catch (e) {
      throw(e);
    }
  }

  async deleteProfile(id: string) {
    try {
      // const dataRef = await doc(this.firestore, `anime-list/${id}`);
      // await deleteDoc(dataRef);

      let currentAccounts = this._accounts.value;
      currentAccounts = currentAccounts.filter(x => x.id != id);
      this._accounts.next(currentAccounts);
    } catch (e) {
      throw(e);
    }
  }

}
