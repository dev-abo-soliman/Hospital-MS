import { Colors } from "@/src/Themes";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./style";

export function RegisterScreen() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const router = useRouter();

  function handleRegister() {
    console.log({
      fullName,
      email,
      phone,
      password,
      confirmPassword,
      agreedToTerms,
    });
  }

  return (
    <View style={styles.screen}>
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          {/* Brand block */}
          <View style={styles.brandRow}>
            <View style={styles.logoBox}>
              <MaterialIcons
                name="monitor-heart"
                size={20}
                color={Colors.onPrimary}
              />
            </View>
            <View>
              <View style={styles.brandNameRow}>
                <Text style={styles.brandName}>MedFlow</Text>
                <View style={styles.brandDot} />
              </View>
              <Text style={styles.brandTagline}>
                Connected care. Smarter healthcare.
              </Text>
            </View>
          </View>

          {/* Title */}
          <Text style={styles.title}>Create your account</Text>
          <Text style={styles.subtitle}>
            Create your secure account to access your healthcare services.
          </Text>

          {/* Form */}
          <View style={styles.form}>
            {/* Full Name */}
            <Text style={styles.fieldLabel}>Full Name</Text>
            <View style={styles.inputWrapper}>
              <MaterialIcons
                name="person"
                size={20}
                color={Colors.outline}
                style={styles.inputIcon}
              />
              <TextInput
                placeholder="e.g. Dr. Sarah Jenkins or John Doe"
                style={styles.inputWithIcon}
                value={fullName}
                onChangeText={setFullName}
              />
            </View>

            {/* Email */}
            <Text style={styles.fieldLabel}>Work or Personal Email</Text>
            <View style={styles.inputWrapper}>
              <MaterialIcons
                name="mail"
                size={20}
                color={Colors.outline}
                style={styles.inputIcon}
              />
              <TextInput
                placeholder="name@hospital.org"
                style={styles.inputWithIcon}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            {/* Phone */}
            <Text style={styles.fieldLabel}>Mobile Phone Number</Text>
            <View style={styles.inputWrapper}>
              <MaterialIcons
                name="phone"
                size={20}
                color={Colors.outline}
                style={styles.inputIcon}
              />
              <TextInput
                placeholder="+1 (555) 019-2834"
                style={styles.inputWithIcon}
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
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
                placeholder="Create a strong password"
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

            {/* Password Strength */}
            <View style={styles.strengthContainer}>
              <View style={styles.strengthHeader}>
                <Text style={styles.strengthLabel}>Password Strength</Text>
                <View style={styles.strengthStatusRow}>
                  <View style={styles.strengthDot} />
                  <Text style={styles.strengthStatusText}>Good</Text>
                </View>
              </View>

              <View style={styles.strengthBarsRow}>
                <View style={styles.strengthBarFilled} />
                <View style={styles.strengthBarFilled} />
                <View style={styles.strengthBarFilled} />
                <View style={styles.strengthBarEmpty} />
              </View>

              <View style={styles.strengthChecksGrid}>
                <View style={styles.strengthCheckItem}>
                  <View style={styles.strengthCheckIconDone}>
                    <MaterialIcons
                      name="check"
                      size={12}
                      color={Colors.onTertiary}
                    />
                  </View>
                  <Text style={styles.strengthCheckTextDone}>
                    At least 8 characters
                  </Text>
                </View>

                <View style={styles.strengthCheckItem}>
                  <View style={styles.strengthCheckIconDone}>
                    <MaterialIcons
                      name="check"
                      size={12}
                      color={Colors.onTertiary}
                    />
                  </View>
                  <Text style={styles.strengthCheckTextDone}>
                    One uppercase letter
                  </Text>
                </View>

                <View style={styles.strengthCheckItem}>
                  <View style={styles.strengthCheckIconDone}>
                    <MaterialIcons
                      name="check"
                      size={12}
                      color={Colors.onTertiary}
                    />
                  </View>
                  <Text style={styles.strengthCheckTextDone}>One number</Text>
                </View>

                <View style={styles.strengthCheckItem}>
                  <View style={styles.strengthCheckIconPending} />
                  <Text style={styles.strengthCheckTextPending}>
                    One special char
                  </Text>
                </View>
              </View>
            </View>

            {/* Confirm Password */}
            <Text style={styles.fieldLabel}>Confirm Password</Text>
            <View style={styles.inputWrapper}>
              <MaterialIcons
                name="password"
                size={20}
                color={Colors.outline}
                style={styles.inputIcon}
              />
              <TextInput
                placeholder="Re-enter your password"
                style={styles.inputWithIcon}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry={!showConfirmPassword}
              />
              <TouchableOpacity
                style={styles.inputEyeIcon}
                onPress={() => setShowConfirmPassword((prev) => !prev)}
              >
                <MaterialIcons
                  name={showConfirmPassword ? "visibility-off" : "visibility"}
                  size={20}
                  color={Colors.outline}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Terms checkbox */}
          <View style={styles.termsRow}>
            <TouchableOpacity
              style={
                agreedToTerms
                  ? styles.checkboxChecked
                  : styles.checkboxUnchecked
              }
              onPress={() => setAgreedToTerms((prev) => !prev)}
            >
              {agreedToTerms && (
                <MaterialIcons
                  name="check"
                  size={14}
                  color={Colors.onPrimary}
                />
              )}
            </TouchableOpacity>
            <Text style={styles.termsText}>
              I agree to the{" "}
              <Text style={styles.termsLink}>Terms of Service</Text> and
              acknowledge MedFlow is healthcare{" "}
              <Text style={styles.termsLink}>Privacy Policy</Text>.
            </Text>
          </View>

          {/* Submit button */}
          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Create Account</Text>
          </TouchableOpacity>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>Already have an account?</Text>
            <TouchableOpacity onPress={() => router.push("/(Auth)/login")}>
              <Text style={styles.signInText}>Sign in</Text>
            </TouchableOpacity>
          </View>

          {/* Security notice */}
          <View style={styles.securityNotice}>
            <View style={styles.securityIconBox}>
              <MaterialIcons
                name="verified-user"
                size={18}
                color={Colors.onSecondary}
              />
            </View>
            <View style={styles.securityTextWrap}>
              <Text style={styles.securityTitle}>HIPAA-Compliant Security</Text>
              <Text style={styles.securityText}>
                Your health data is 256-bit encrypted and safely protected.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
