import { Component, PropSync, Vue } from "vue-property-decorator";
import { UserEntity } from "../../models/UsersEntity";
import moment from "moment";
import "./Details.scss";
@Component({})
export class Details extends Vue {
  @PropSync("user")
  readonly selectedUser!: UserEntity;

  render() {
    const {
      id,
      location,
      created,
      devices,
      sessions,
      events,
      attributes: { email }
    } = this.selectedUser;
    const d = moment(created).format("LLL");

    return (
      <div>
        <header>
          <h2>{id}</h2>
          <p>
            {d} - {location}
          </p>
        </header>
        <section class="card-group">
          <div class="card">
            <p>Devices</p>
            <h2>{devices}</h2>
          </div>
          <div class="card">
            <p>Sessions</p>
            <h2>{sessions.length}</h2>
          </div>
          <div class="card">
            <p>Events</p>
            <h2>{events}</h2>
          </div>
        </section>
        <section class="grid">
          <table cellSpacing="0">
            <thead>
              <tr>
                <th width="30%">Attribute</th>
                <th width="70%">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>e-mail</td>
                <td>{email}</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    );
  }
}
