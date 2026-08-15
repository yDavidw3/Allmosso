import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, Text } from 'react-native';

function MyBackButton() {
    const navigation = useNavigation();

    return(
        <TouchableOpacity
        onPress={() => {
            navigation.goBack();
        }}
        >
        <Text>Back</Text>
        </TouchableOpacity>
    );
}