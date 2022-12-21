import { Component, Vue } from "vue-property-decorator";

import "./Audiences.scss";
import { generateSampleData, UserEntity } from "../models/UsersEntity";
import { List } from "../components/List/List";
import { Details } from "../components/Detials/Details";
@Component({})
export default class Audiences extends Vue {
  users = generateSampleData();
  user: UserEntity | null = null;

  setUser(item: UserEntity): void {
    this.user = item;
  }

  render() {
    return (
      <div class="container">
        <div class="row">
          <section class="col-4">
            <header class="border-bottom ">
              <h2>Users in Audience</h2>
              <p>Total Users - Showing {this.users.length} matching users</p>
            </header>
            {this.users && <List items={this.users} on-selected-item={this.setUser} />}
          </section>
          <section class="col-8">{this.user && <Details user={this.user} />}</section>
        </div>
      </div>
    );
  }
}
