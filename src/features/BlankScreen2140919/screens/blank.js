import React from "react"
import { View, Image, ImageBackground } from "react-native"
import {
  withStyles,
  Text,
  Button,
  CheckBox,
  Radio,
  Toggle,
  Icon,
  Input,
  Datepicker
} from "react-native-ui-kitten"
import Slider from "@react-native-community/slider"

import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export class _Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {}

  render = () => (
    <View style={styles.View_1}>
      <Text style={styles.Text_4}>Article Title</Text>
      <Image
        resizeMode="cover"
        source={{
          uri:
            "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/5ec2ed3f973b2.image_RbndCH5.jpg"
        }}
        style={styles.Image_6}
      />
      <View style={styles.View_28}>
        <View style={styles.View_29}>
          <Button
            title="Like"
            color="#33fff1"
            style={styles.Button_34}
            onPress={() => alert("Pressed!")}
          />
        </View>
        <View style={styles.View_30}>
          <Button
            title="Dislike"
            color="#bcd7d5"
            style={styles.Button_35}
            onPress={() => alert("Pressed!")}
          />
        </View>
      </View>
      <Text style={styles.Text_31}>
        Sample text content. Sample text content. Sample text content. Sample
        text content. Sample text content. Sample text content. Sample text
        content. Sample text content. Sample text content. Sample text content
      </Text>
      <Button
        title="Return to list"
        color="#d3dbf3"
        style={styles.Button_32}
        onPress={() => this.props.navigation.navigate("ArticleList5140938")}
      />
    </View>
  )
}
export default Blank = withStyles(_Blank, theme => ({
  container: {
    backgroundColor: theme["color-basic-100"]
  }
}))
