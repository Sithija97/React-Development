import SignOutButton from "@/components/SignOutButton";
import { useUser } from "@clerk/clerk-expo";
import { Feather } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Home = () => {
  const { user } = useUser();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header Section */}
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <View>
              <Text style={styles.greeting}>Welcome back!</Text>
              <Text style={styles.userName}>
                {user?.firstName ||
                  user?.emailAddresses[0]?.emailAddress ||
                  "User"}
              </Text>
            </View>
            <TouchableOpacity style={styles.profileButton}>
              {user?.imageUrl ? (
                <Image
                  source={{ uri: user.imageUrl }}
                  style={styles.profileImage}
                />
              ) : (
                <View style={styles.profilePlaceholder}>
                  <Feather name="user" size={24} color="#6b7280" />
                </View>
              )}
            </TouchableOpacity>
          </View>
        </View>

        {/* Stats Cards */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <View style={styles.statIcon}>
              <Feather name="activity" size={20} color="#1DA1F2" />
            </View>
            <Text style={styles.statNumber}>24</Text>
            <Text style={styles.statLabel}>Active Tasks</Text>
          </View>

          <View style={styles.statCard}>
            <View style={styles.statIcon}>
              <Feather name="check-circle" size={20} color="#10b981" />
            </View>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Completed</Text>
          </View>

          <View style={styles.statCard}>
            <View style={styles.statIcon}>
              <Feather name="clock" size={20} color="#f59e0b" />
            </View>
            <Text style={styles.statNumber}>8</Text>
            <Text style={styles.statLabel}>Pending</Text>
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.actionsGrid}>
            <TouchableOpacity style={styles.actionCard}>
              <View style={styles.actionIcon}>
                <Feather name="plus" size={24} color="#1DA1F2" />
              </View>
              <Text style={styles.actionText}>New Task</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionCard}>
              <View style={styles.actionIcon}>
                <Feather name="calendar" size={24} color="#8b5cf6" />
              </View>
              <Text style={styles.actionText}>Schedule</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionCard}>
              <View style={styles.actionIcon}>
                <Feather name="users" size={24} color="#10b981" />
              </View>
              <Text style={styles.actionText}>Team</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionCard}>
              <View style={styles.actionIcon}>
                <Feather name="bar-chart-2" size={24} color="#f59e0b" />
              </View>
              <Text style={styles.actionText}>Reports</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Recent Activity */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <View style={styles.activityList}>
            <View style={styles.activityItem}>
              <View style={styles.activityIcon}>
                <Feather name="check" size={16} color="#10b981" />
              </View>
              <View style={styles.activityContent}>
                <Text style={styles.activityTitle}>Task completed</Text>
                <Text style={styles.activityTime}>2 hours ago</Text>
              </View>
            </View>

            <View style={styles.activityItem}>
              <View style={styles.activityIcon}>
                <Feather name="message-circle" size={16} color="#1DA1F2" />
              </View>
              <View style={styles.activityContent}>
                <Text style={styles.activityTitle}>New message received</Text>
                <Text style={styles.activityTime}>4 hours ago</Text>
              </View>
            </View>

            <View style={styles.activityItem}>
              <View style={styles.activityIcon}>
                <Feather name="user-plus" size={16} color="#8b5cf6" />
              </View>
              <View style={styles.activityContent}>
                <Text style={styles.activityTitle}>New team member added</Text>
                <Text style={styles.activityTime}>1 day ago</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Sign Out Button */}
        <SignOutButton />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  header: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 24,
    marginBottom: 16,
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  greeting: {
    fontSize: 16,
    color: "#6b7280",
    marginBottom: 4,
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1f2937",
  },
  profileButton: {
    width: 48,
    height: 48,
  },
  profileImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  profilePlaceholder: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#f3f4f6",
    alignItems: "center",
    justifyContent: "center",
  },
  statsContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    gap: 12,
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  statIcon: {
    marginBottom: 8,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: "#6b7280",
    textAlign: "center",
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: 16,
  },
  actionsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  actionCard: {
    flex: 1,
    minWidth: "45%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  actionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#f8fafc",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  actionText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#374151",
    textAlign: "center",
  },
  activityList: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  activityItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f3f4f6",
  },
  activityIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#f8fafc",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "#374151",
    marginBottom: 2,
  },
  activityTime: {
    fontSize: 12,
    color: "#9ca3af",
  },
});

export default Home;
