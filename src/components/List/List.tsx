import { Component, Emit, Prop, Vue } from "vue-property-decorator";
import { UserEntity } from "../../models/UsersEntity";
import "./List.scss";
@Component({})
export class List extends Vue {
  @Prop({ required: true })
  readonly items!: UserEntity[];

  @Emit("selected-item")
  selectItem(item: UserEntity): UserEntity {
    return item;
  }
  render() {
    return <ul class="list">{this.items && this.items.map(item => this.renderItem(item))}</ul>;
  }

  private renderItem(item: UserEntity) {
    const { id, devices, sessions, location } = item;
    return (
      <li class="list-item" onClick={() => this.selectItem(item)}>
        <h3>{id}</h3>
        <p>
          {devices} Devices - {sessions.length} Session - {location}
        </p>
      </li>
    );
  }
}
