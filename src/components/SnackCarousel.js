import Carousel from 'react-native-snap-carousel';
import SnackCard from './SnackCard';
import { snacks } from '../data/snacksdata';

export class MyCarousel extends Component {

  renderSnacks() {
    return (
      snacks.map((snack, index) =>
        <SnackCard
          key={index}
          snackProps={snack}
          onAddButton={() => this.onAdd(snack.title)}
          onSubstractButton={() => this.onSubstract(snack.title)}
          snackQuantity={this.state.orders[snack.title]}
        />)
    );
  }
    _renderItem ({item, index}) {
        return (
            <View style={styles.slide}>
                <Text style={styles.title}>{ item.title }</Text>
            </View>
        );
    }

    render () {
        return (
            <Carousel
              ref={(c) => { this._carousel = c; }}
              data={this.state.entries}
              renderItem={this._renderItem}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
            />
        );
    }
}
