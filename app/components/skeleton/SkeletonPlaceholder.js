import React, { useEffect } from "react";
import { Dimensions, StyleSheet, View, Animated, Easing } from "react-native";

const { width } = Dimensions.get("window");
import { LinearGradient } from "expo-linear-gradient";
import colors from "../../config/colors";

const AnimatedLG = Animated.createAnimatedComponent(LinearGradient);

function SkeletonPlaceholder({ height }) {
  const animatedValue = new Animated.Value(0);

  useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear.inOut,
        useNativeDriver: true,
      })
    ).start();
  });

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-width, width],
  });

  return (
    <View
      style={[
        {
          backgroundColor: colors.light,
          borderColor: colors.medium,
          height: height,
          width: width,
        },
      ]}
    >
      <AnimatedLG
        colors={[colors.light, colors.light2, colors.light2, colors.light]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{
          ...StyleSheet.absoluteFill,
          transform: [{ translateX: translateX }],
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default SkeletonPlaceholder;
