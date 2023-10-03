import React from 'react';
import { Text, View  , StyleSheet} from 'react-native';
import COLORS from '../../constant/COLOR';

const TextView = ({
  label,
  fontSize,
  color,
  marginTop,
  paddingHorizontal,
  fontFamily,
  marginLeft,
  alignSelf,
  marginBottom,
  textAlign,
  borderBottomWidth,
  borderWidth,
  borderColor,
  paddingVertical,
  borderRadius,
  justifyContent,
  backgroundColor,
  width,
  paddingRight,
  fontWeight,
  paddingLeft,
  marginRight,
  marginVertical,
  dis
}) => {
  return (
    <View
      style={[
        paddingHorizontal ? { paddingHorizontal } : { paddingHorizontal: 0 },
        marginTop ? { marginTop } : { marginTop: 0 },
        borderWidth ? { borderWidth } : {},
        textAlign ? { textAlign } : {},
        paddingVertical ? { paddingVertical } : {},
        width ? { width } : {},
        borderRadius ? { borderRadius } : {},
        backgroundColor ? { backgroundColor } : {},
        paddingRight ? { paddingRight } : {},
        marginRight ? { marginRight } : {},
        marginVertical ? { marginVertical } : {},
        borderColor ? { borderColor } : { borderColor: COLORS.black },
      ]}
    >
      <Text
        allowFontScaling={false}
        style={[
          styles.textStyle,
          fontSize ? { fontSize } : { fontSize: 17 },
          fontFamily ? { fontFamily } : { fontFamily: 'Poppins-Regular' },
          color ? { color } : { color: COLORS.black },
          marginLeft ? { marginLeft } : {},
          backgroundColor ? { backgroundColor } : {},
          paddingRight ? { paddingRight } : {},
          alignSelf ? { alignSelf } : {},
          width ? { width } : {},
          marginBottom ? { marginBottom } : {},
          marginTop ? { marginTop } : {},
          textAlign ? { textAlign } : {},
          fontWeight ? { fontWeight } : {},
          borderBottomWidth ? { borderBottomWidth } : {},
          paddingLeft ? { paddingLeft } : {},
        ]}
        disabled={dis}
      >
        {label}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
    textStyle: {
        fontStyle: "normal",
        fontFamily: 'Poppins-Regular'
        // fontWeight: 600
    },
});

export default TextView;