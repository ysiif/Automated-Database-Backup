import sqlite3
import shutil

def backup_database(database_file, backup_path):
    shutil.copy2(database_file, backup_path)

if __name__ == "__main__":
    database_file = "database.db"
    backup_path = "backup.db"
    backup_database(database_file, backup_path)
