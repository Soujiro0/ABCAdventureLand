import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from '@angular/fire/firestore';
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

  constructor(private firestore: Firestore) { }

  getAccountById() {}

  async getAccounts() {
    try {
      // dataRef: get the collection in firebase (The Integrated firestore, The name of collection in database)
      const dataRef: any = collection(this.firestore, 'profiles');
      // Using getDocs(), passing the argument dataRef to query to database
      const querySnapshot = await getDocs(dataRef);

      const profile: Profile[] = await querySnapshot.docs.map((doc) => {
        // Get Data one by one in variable item
        let item: any = doc.data();
        console.log(item);
        item.id = doc.id;
        return item;
      });
      this._accounts.next(profile);
      return profile;
    } catch (e) {
      throw(e);
    }
  }

  async addProfile(profile: any) {
    try {
      const dataRef: any = collection(this.firestore, 'profiles');
      const response = await addDoc(dataRef, profile);
      const id = await response?.id;
      const newId = id;
      const currentAccounts = this._accounts.value;
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
      const dataRef = await doc(this.firestore, `profiles/${id}`);
      await updateDoc(dataRef, profile);

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
      const dataRef = await doc(this.firestore, `profiles/${id}`);
      await deleteDoc(dataRef);

      let currentAccounts = this._accounts.value;
      currentAccounts = currentAccounts.filter(x => x.id != id);
      this._accounts.next(currentAccounts);
    } catch (e) {
      throw(e);
    }
  }

}
