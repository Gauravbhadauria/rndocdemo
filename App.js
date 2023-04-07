import React, {Component, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
} from 'react-native-table-component';

const App = () => {
  const [tableHead, setTableHead] = useState([
    'Users',
    'Contact',
    'Email',
    'Address',
  ]);
  const [tableTitle, setTableTitle] = useState([
    'gaurav',
    'ankit',
    'kabir',
    'raj',
  ]);
  const [tableData, setTableData] = useState([
    ['8888888383', 'gaurav@gmail.com', 'delhi'],
    ['3847638883', 'ankit@gmail.com', 'Noida'],
    ['9938373737', 'kabir@gamil.com', 'Jaipur'],
    ['9373939334', 'raj@gmail.com', 'Mumbai'],
  ]);

  return (
    <View style={styles.container}>
      <Table borderStyle={{borderWidth: 1}}>
        <Row
          data={tableHead}
          flexArr={[1, 2, 1, 1]}
          style={styles.head}
          textStyle={styles.text}
        />
        <TableWrapper style={styles.wrapper}>
          <Col
            data={tableTitle}
            style={styles.title}
            heightArr={[28, 28]}
            textStyle={styles.text}
          />
          <Rows
            data={tableData}
            flexArr={[2, 1, 1]}
            style={styles.row}
            textStyle={styles.text}
          />
        </TableWrapper>
      </Table>
    </View>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
  head: {height: 40, backgroundColor: '#f1f8ff'},
  wrapper: {flexDirection: 'row'},
  title: {backgroundColor: '#f6f8fa'},
  row: {},
  text: {textAlign: 'center'},
});
