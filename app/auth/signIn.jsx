import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native'

export default function signIn() {
    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}   >

        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({})