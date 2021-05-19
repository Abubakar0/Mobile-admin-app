import * as React from "react";
import {
  TouchableOpacity,
  Button,
  View,
  StyleSheet,
  FlatList,
  Text,
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.homeview}>
      <TouchableOpacity
        style={{ padding: 10, borderBottomWidth: 1 }}
        onPress={() => navigation.navigate("ProductList")}
      >
        Manage Products
      </TouchableOpacity>
      <TouchableOpacity
        style={{ padding: 10, borderBottomWidth: 1 }}
        onPress={() => navigation.navigate("EmployeeList")}
      >
        Manage Employee
      </TouchableOpacity>
      <TouchableOpacity
        style={{ padding: 10, borderBottomWidth: 1 }}
        onPress={() => navigation.navigate("OrderList")}
      >
        Manage Orders
      </TouchableOpacity>
    </View>
  );
}

function P1({ navigation }) {
  return (
    <View style={styles.container}>
      <h1 style={{ backgroundColor: "orange" }}>PRODUCTS</h1>
      <Text style={styles.text}>Name : Product 1</Text>
      <Text style={styles.text}>Price : 888</Text>
      <Image
        source={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4QcviVkjXItFoplXnxZBUDaMumTK6PmnY_g&usqp=CAU"
        }
        style={{ width: 305, height: 159 }}
      />
      <TouchableOpacity
        style={{ fontSize: 20, color: "Black", padding: 30 }}
        onPress={() => navigation.goBack()}
      >
        Go Back
      </TouchableOpacity>
    </View>
  );
}
function P2({ navigation }) {
  return (
    <View style={styles.container}>
      <h1 style={{ backgroundColor: "orange" }}>PRODUCTS</h1>
      <Text style={styles.text}>Name : Product 2</Text>
      <Text style={styles.text}>Price : 888</Text>
      <Image
        source={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4QcviVkjXItFoplXnxZBUDaMumTK6PmnY_g&usqp=CAU"
        }
        style={{ width: 305, height: 159 }}
      />
      <TouchableOpacity
        style={{ fontSize: 20, color: "Black", padding: 30 }}
        onPress={() => navigation.goBack()}
      >
        Go Back
      </TouchableOpacity>
    </View>
  );
}
function P3({ navigation }) {
  return (
    <View style={styles.container}>
      {" "}
      <h1 style={{ backgroundColor: "orange" }}>PRODUCTS</h1>
      <Text style={styles.text}>Name : Product 3</Text>
      <Text style={styles.text}>Price : 888</Text>
      <Image
        source={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4QcviVkjXItFoplXnxZBUDaMumTK6PmnY_g&usqp=CAU"
        }
        style={{ width: 305, height: 159 }}
      />
      <TouchableOpacity
        style={{ fontSize: 20, color: "Black", padding: 30 }}
        onPress={() => navigation.goBack()}
      >
        Go Back
      </TouchableOpacity>
    </View>
  );
}
function P4({ navigation }) {
  return (
    <View style={styles.container}>
      {" "}
      <h1 style={{ backgroundColor: "orange" }}>PRODUCTS</h1>
      <Text style={styles.text}>Name : Product 4</Text>
      <Text style={styles.text}>Price : 888</Text>
      <Image
        source={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4QcviVkjXItFoplXnxZBUDaMumTK6PmnY_g&usqp=CAU"
        }
        style={{ width: 305, height: 159 }}
      />
      <TouchableOpacity
        style={{ fontSize: 20, color: "Black", padding: 30 }}
        onPress={() => navigation.goBack()}
      >
        Go Back
      </TouchableOpacity>
    </View>
  );
}
function P5({ navigation }) {
  return (
    <View style={styles.container}>
      {" "}
      <h1 style={{ backgroundColor: "orange" }}>PRODUCTS</h1>
      <Text style={styles.text}>Name : Product 5</Text>
      <Text style={styles.text}>Price : 888</Text>
      <Image
        source={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4QcviVkjXItFoplXnxZBUDaMumTK6PmnY_g&usqp=CAU"
        }
        style={{ width: 305, height: 159 }}
      />
      <TouchableOpacity
        style={{
          fontSize: 20,
          color: "Black",
          padding: 30,
        }}
        onPress={() => navigation.goBack()}
      >
        Go Back
      </TouchableOpacity>
    </View>
  );
}

function e1({ navigation }) {
  return (
    <View style={styles.container}>
      {" "}
      <h1 style={{ backgroundColor: "orange" }}>EMPLOYEES</h1>
      <Text style={styles.text}>Name : Employee 1</Text>
      <Text style={styles.text}>Designation : Manager</Text>
      <TouchableOpacity
        style={{
          fontSize: 20,
          color: "Black",
          padding: 30,
        }}
        onPress={() => navigation.goBack()}
      >
        Go Back
      </TouchableOpacity>
    </View>
  );
}
function e2({ navigation }) {
  return (
    <View style={styles.container}>
      {" "}
      <h1 style={{ backgroundColor: "orange" }}>EMPLOYEES</h1>
      <Text style={styles.text}>Name : Employee 2</Text>
      <Text style={styles.text}>Designation : Manager</Text>
      <TouchableOpacity
        style={{
          fontSize: 20,
          color: "Black",
          padding: 30,
        }}
        onPress={() => navigation.goBack()}
      >
        Go Back
      </TouchableOpacity>
    </View>
  );
}
function e3({ navigation }) {
  return (
    <View style={styles.container}>
      {" "}
      <h1 style={{ backgroundColor: "orange" }}>EMPLOYEES</h1>
      <Text style={styles.text}>Name : Employee 3</Text>
      <Text style={styles.text}>Designation : Manager</Text>
      <TouchableOpacity
        style={{
          fontSize: 20,
          color: "Black",
          padding: 30,
        }}
        onPress={() => navigation.goBack()}
      >
        Go Back
      </TouchableOpacity>
    </View>
  );
}
function e4({ navigation }) {
  return (
    <View style={styles.container}>
      <h1 style={{ backgroundColor: "orange" }}>EMPLOYEES</h1>

      <Text style={styles.text}>Name : Employee 4</Text>
      <Text style={styles.text}>Designation : Manager</Text>

      <TouchableOpacity
        style={{
          fontSize: 20,
          color: "Black",
          padding: 30,
        }}
        onPress={() => navigation.goBack()}
      >
        Go Back
      </TouchableOpacity>
    </View>
  );
}
function e5({ navigation }) {
  return (
    <View style={styles.container}>
      <h1 style={{ backgroundColor: "orange" }}>EMPLOYEES</h1>
      <Text style={styles.text}>Name : Employee 5</Text>
      <Text style={styles.text}>Designation : Manager</Text>
      <TouchableOpacity
        style={{
          fontSize: 20,
          color: "Black",
          padding: 30,
        }}
        onPress={() => navigation.goBack()}
      >
        Go Back
      </TouchableOpacity>
    </View>
  );
}

function o1({ navigation }) {
  return (
    <View style={styles.container}>
      <h1 style={{ backgroundColor: "orange" }}>ORDER # 1</h1>
      <Text style={styles.text}>Order # 1</Text>
      <Text style={styles.text}>Product Name : Product 1</Text>

      <TouchableOpacity
        style={{
          fontSize: 20,
          color: "Black",
          padding: 30,
        }}
        onPress={() => navigation.goBack()}
      >
        Go Back
      </TouchableOpacity>
    </View>
  );
}
function o2({ navigation }) {
  return (
    <View style={styles.container}>
      <h1 style={{ backgroundColor: "orange" }}>ORDER # 2</h1>
      <Text style={styles.text}>Order # 2</Text>
      <Text style={styles.text}>Product Name : Product 4</Text>

      <TouchableOpacity
        style={{
          fontSize: 20,
          color: "Black",
          padding: 30,
        }}
        onPress={() => navigation.goBack()}
      >
        Go Back
      </TouchableOpacity>
    </View>
  );
}
function o3({ navigation }) {
  return (
    <View style={styles.container}>
      <h1 style={{ backgroundColor: "orange" }}>ORDER # 3</h1>
      <Text style={styles.text}>Order # 3</Text>
      <Text style={styles.text}>Product Name : Product 2</Text>

      <TouchableOpacity
        style={{
          fontSize: 20,
          color: "Black",
          padding: 30,
        }}
        onPress={() => navigation.goBack()}
      >
        Go Back
      </TouchableOpacity>
    </View>
  );
}
function o4({ navigation }) {
  return (
    <View style={styles.container}>
      <h1 style={{ backgroundColor: "orange" }}>ORDER # 4</h1>
      <Text style={styles.text}>Order # 4</Text>
      <Text style={styles.text}>Product Name : Product 3</Text>

      <TouchableOpacity
        style={{
          fontSize: 20,
          color: "Black",
          padding: 30,
        }}
        onPress={() => navigation.goBack()}
      >
        Go Back
      </TouchableOpacity>
    </View>
  );
}
function o5({ navigation }) {
  return (
    <View style={styles.container}>
      <h1 style={{ backgroundColor: "orange" }}>ORDER # 5</h1>

      <Text style={styles.text}>Order # 5</Text>
      <Text style={styles.text}>Product Name : Product 5</Text>
      <TouchableOpacity
        style={{
          fontSize: 20,
          color: "Black",
          padding: 30,
        }}
        onPress={() => navigation.goBack()}
      >
        Go Back
      </TouchableOpacity>
    </View>
  );
}

function ProductList({ navigation }) {
  return (
    <View style={styles.container}>
      <h1 style={{ backgroundColor: "orange" }}>PRODUCT LIST</h1>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate("P1")}
      >
        Product:1
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate("P2")}
      >
        Product:2
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate("P3")}
      >
        Product:3
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate("P4")}
      >
        Product:4
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate("P5")}
      >
        Product:5
      </TouchableOpacity>

      <TouchableOpacity
        style={{ fontSize: 30, color: "Black", padding: 30 }}
        onPress={() => navigation.goBack()}
      >
        Go Back
      </TouchableOpacity>
    </View>
  );
}

function EmployeeList({ navigation }) {
  return (
    <View style={styles.container}>
      <h1 style={{ backgroundColor: "orange" }}>Employee LIST</h1>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate("e1")}
      >
        Employee:1
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate("e2")}
      >
        Employee:2
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate("e3")}
      >
        Employee:3
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate("e4")}
      >
        Employee:4
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate("e5")}
      >
        Employee:5
      </TouchableOpacity>

      <TouchableOpacity
        style={{ fontSize: 30, color: "Black", padding: 30 }}
        onPress={() => navigation.goBack()}
      >
        Go Back
      </TouchableOpacity>
    </View>
  );
}

function OrderList({ navigation }) {
  return (
    <View style={styles.container}>
      <h1 style={{ backgroundColor: "orange" }}>ORDERS LIST</h1>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate("o1")}
      >
        Order:1
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate("o2")}
      >
        Order:2
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate("o3")}
      >
        Order:3
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate("o4")}
      >
        Order:4
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate("o5")}
      >
        Order:5
      </TouchableOpacity>

      <TouchableOpacity
        style={{ fontSize: 30, color: "Black", padding: 30 }}
        onPress={() => navigation.goBack()}
      >
        Go Back
      </TouchableOpacity>
    </View>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ProductList" component={ProductList} />
      <Stack.Screen name="EmployeeList" component={EmployeeList} />
      <Stack.Screen name="OrderList" component={OrderList} />
      <Stack.Screen name="P1" component={P1} />
      <Stack.Screen name="P2" component={P2} />
      <Stack.Screen name="P3" component={P3} />
      <Stack.Screen name="P4" component={P4} />
      <Stack.Screen name="P5" component={P5} />
      <Stack.Screen name="e1" component={e1} />
      <Stack.Screen name="e2" component={e2} />
      <Stack.Screen name="e3" component={e3} />
      <Stack.Screen name="e4" component={e4} />
      <Stack.Screen name="e5" component={e5} />
      <Stack.Screen name="o1" component={o1} />
      <Stack.Screen name="o2" component={o2} />
      <Stack.Screen name="o3" component={o3} />
      <Stack.Screen name="o4" component={o4} />
      <Stack.Screen name="o5" component={o5} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  homeview: {
    fontWeight: "200",
    fontSize: 30,
    fontStyle: "italic",
    color: "black",
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    padding: 15,
    marginBottom: 5,
    fontSize: 25,
    height: 44,
    color: "black",
    borderWidth: 1,
  },
  text: {
    padding: 5,
    marginBottom: 5,
    fontSize: 20,
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
