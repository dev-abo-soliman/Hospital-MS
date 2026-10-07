import { Colors } from "@/src/Themes";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./style";

export function LoginScreen() {
  const router = useRouter();

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleLogin() {
    setShowError(false);
    setIsLoading(true);

    // مؤقتًا: محاكاة طلب تسجيل الدخول (هنستبدلها بالـ API بعدين)
    setTimeout(() => {
      setIsLoading(false);
      setShowError(true);
      console.log({ identifier, password });
    }, 1200);
  }

  return (
    <View style={styles.screen}>
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          {/* Brand row */}
          <View style={styles.brandRow}>
            <View style={styles.brandLeft}>
              <View style={styles.logoBox}>
                <MaterialIcons
                  name="monitor-heart"
                  size={22}
                  color={Colors.onPrimary}
                />
              </View>
              <View>
                <Text style={styles.brandName}>MedFlow</Text>
                <Text style={styles.brandSubtitle}>Clinical Portal</Text>
              </View>
            </View>

            <View style={styles.vaultBadge}>
              <View style={styles.vaultDot} />
              <Text style={styles.vaultText}>HIPAA Vault</Text>
            </View>
          </View>

          {/* Hero */}
          <Text style={styles.title}>Welcome back</Text>
          <Text style={styles.subtitle}>
            Sign in to continue to your healthcare account and secure medical
            portal.
          </Text>

          {/* Error alert */}
          {showError && (
            <View style={styles.alertBox}>
              <MaterialIcons name="error" size={20} color={Colors.error} />
              <View style={styles.alertTextWrap}>
                <Text style={styles.alertTitle}>Authentication Failed</Text>
                <Text style={styles.alertMessage}>
                  Incorrect email or password. Please verify your credentials.
                </Text>
              </View>
              <TouchableOpacity
                style={styles.alertCloseButton}
                onPress={() => setShowError(false)}
              >
                <MaterialIcons
                  name="close"
                  size={18}
                  color={Colors.onErrorContainer}
                />
              </TouchableOpacity>
            </View>
          )}

          {/* Form */}
          <View style={styles.form}>
            {/* Identifier */}
            <Text style={styles.fieldLabel}>Email or phone number</Text>
            <View style={styles.inputWrapper}>
              <MaterialIcons
                name="alternate-email"
                size={20}
                color={Colors.outline}
                style={styles.inputIcon}
              />
              <TextInput
                placeholder="Enter your email or phone"
                style={styles.inputWithIcon}
                value={identifier}
                onChangeText={setIdentifier}
                autoCapitalize="none"
              />
            </View>

            {/* Password */}
            <Text style={styles.fieldLabel}>Password</Text>
            <View style={styles.inputWrapper}>
              <MaterialIcons
                name="lock"
                size={20}
                color={Colors.outline}
                style={styles.inputIcon}
              />
              <TextInput
                placeholder="Enter your password"
                style={styles.inputWithIcon}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity
                style={styles.inputEyeIcon}
                onPress={() => setShowPassword((prev) => !prev)}
              >
                <MaterialIcons
                  name={showPassword ? "visibility-off" : "visibility"}
                  size={20}
                  color={Colors.outline}
                />
              </TouchableOpacity>
            </View>

            {/* Forgot password */}
            <View style={styles.forgotPasswordRow}>
              <TouchableOpacity onPress={() => {}}>
                <Text style={styles.forgotPasswordText}>Forgot password?</Text>
              </TouchableOpacity>
            </View>

            {/* Submit button */}
            <TouchableOpacity
              style={styles.button}
              onPress={handleLogin}
              disabled={isLoading}
            >
              {isLoading ? (
                <ActivityIndicator color={Colors.onPrimary} />
              ) : (
                <>
                  <Text style={styles.buttonText}>Sign In</Text>
                  <MaterialIcons
                    name="arrow-forward"
                    size={18}
                    color={Colors.onPrimary}
                  />
                </>
              )}
            </TouchableOpacity>
          </View>

          {/* Divider */}
          <View style={styles.dividerRow}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>OR</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Google button */}
          <TouchableOpacity style={styles.googleButton} onPress={() => {}}>
            <MaterialIcons
              name="g-translate"
              size={20}
              color={Colors.onSurface}
            />
            <Text style={styles.googleButtonText}>Continue with Google</Text>
          </TouchableOpacity>

          {/* Footer: sign up link */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>Dont have an account?</Text>
            <TouchableOpacity onPress={() => router.push("/(Auth)/register")}>
              <Text style={styles.signUpText}>Create account</Text>
            </TouchableOpacity>
          </View>

          {/* Security notice */}
          <View style={styles.securityNotice}>
            <View style={styles.securityIconBox}>
              <MaterialIcons
                name="verified-user"
                size={20}
                color={Colors.secondary}
              />
            </View>
            <View style={styles.securityTextWrap}>
              <Text style={styles.securityTitle}>HIPAA Certified Protocol</Text>
              <Text style={styles.securityText}>
                Your medical data and patient records are encrypted with 256-bit
                clinical-grade protocols.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
