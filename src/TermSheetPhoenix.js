import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import WrapperGraphPayOutPhoenix from './wrapperGraph/WrapperGraphPayOutPhoenix'
import getRandomInt from './function/getRandomInt'

import NegativeScenario from './Scenario/NegativeScenario'
import PositiveScenario from './Scenario/PositiveScenario'
import MedianScenario from './Scenario/MedianScenario'

export default function TermSheetPhoenix({
  coupon,
  ymin,
  ymax,
  xmax,
  barr_capital,
  barr_anticipe,
  barr_coupon,
  airbag,
  disable
}) {

  const [scenarioNegatif, setScenarioNegatif] = useState(getRandomInt(44, 58))
  const [scenarioNeutre, setScenarioNeutre] = useState(getRandomInt(61, 90))
  const [scenarioPositif, setScenarioPositif] = useState(getRandomInt(110, 121))
  const [switchAirbag, setSwitchAirbag] = useState(airbag)

  function changeAirbag(value) {
    setSwitchAirbag(value);
    // console.log("airbag Changed to " + value)
  }

  function newScenarioNegatif() {
    setScenarioNegatif(getRandomInt(44, 58));
  }

  function newScenarioNeutre() {
    setScenarioNeutre(getRandomInt(61, 90));
  }

  function newScenarioPositif() {
    setScenarioPositif(getRandomInt(110, 121));
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.container}>
            <Text style={{ fontSize: 30, paddingTop: 5 }}>Phoenix</Text>
            {/* <Text style={{ fontSize: 26, paddingBottom: 5, fontStyle: 'italic' }}>avec ou sans airbag</Text> */}
          </View>
          <View style={styles.container}>
            <Text style={{ fontSize: 20, paddingVertical: 5 }}>Illustrations de scénarii de remboursement</Text>
            <Text style={{ paddingVertical: 5, fontWeight: 'bold' }}>Les données utilisées dans ces exemples n’ont qu’une valeur indicative et informative, l’objectif étant de décrire le mécanisme
            du produit. Elles ne préjugent en rien de résultats futurs. L’ensemble des données est présenté hors fiscalité et/ou frais liés
            au cadre d’investissement.
            </Text>
            <Text style={{ paddingBottom: 15 }}>
              Exemple avec un produit à maturité {xmax} ans, une observation annuelle du sous-jacent, un coupon de {coupon}%, une barrière de {
              barr_coupon}% du niveau initial du sous-jacent, une barrière de rappel automatique anticipé de {barr_anticipe}% du niveau initial du
              sous-jacent, et une barrière de protection (observée à l’échéance) de {barr_capital}% du niveau initial du sous-jacent.
            </Text>
          </View>

          {/* ****************** Bloc ****************************************************** */}
          <View style={{ paddingBottom: 30 }}>
            <NegativeScenario
              remb={scenarioNegatif}
              coupon={coupon}
              ymin={ymin}
              ymax={ymax}
              xmax={xmax}
              barr_capital={barr_capital}
              barr_anticipe={barr_anticipe}
              barr_coupon={barr_coupon}
              xrel={0}
              rand_func={() => newScenarioNegatif()}
            />
            <WrapperGraphPayOutPhoenix
              remb={scenarioNegatif}
              coupon={coupon}
              ymin={ymin}
              ymax={ymax}
              xmax={xmax}
              barr_capital={barr_capital}
              barr_anticipe={barr_anticipe}
              barr_coupon={barr_coupon}
              xrel={0}
            />
          </View>

          {/* ****************** Bloc ****************************************************** */}
          <View style={{ paddingBottom: 30 }}>
            <MedianScenario
              remb={scenarioNeutre}
              coupon={coupon}
              ymin={ymin}
              ymax={ymax}
              xmax={xmax}
              barr_capital={barr_capital}
              barr_anticipe={barr_anticipe}
              barr_coupon={barr_coupon}
              xrel={0}
              rand_func={() => newScenarioNeutre()}
            />
            <WrapperGraphPayOutPhoenix
              remb={scenarioNeutre}
              coupon={coupon}
              ymin={ymin}
              ymax={ymax}
              xmax={xmax}
              barr_capital={barr_capital}
              barr_anticipe={barr_anticipe}
              barr_coupon={barr_coupon}
              xrel={0}
            />
          </View>

          {/* ****************** Bloc ****************************************************** */}
          <View style={{ paddingBottom: 10 }}>
            <PositiveScenario
              remb={scenarioPositif}
              coupon={coupon}
              ymin={ymin}
              ymax={ymax}
              xmax={xmax}
              barr_capital={barr_capital}
              barr_anticipe={barr_anticipe}
              barr_coupon={barr_coupon}
              xrel={1}
              rand_func={() => newScenarioPositif()}
            />
            <WrapperGraphPayOutPhoenix
              remb={scenarioPositif}
              coupon={coupon}
              ymin={ymin}
              ymax={ymax}
              xmax={xmax}
              barr_capital={barr_capital}
              barr_anticipe={barr_anticipe}
              barr_coupon={barr_coupon}
              xrel={1}
            />
          </View>

        </View>
      </ScrollView>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
  },
});