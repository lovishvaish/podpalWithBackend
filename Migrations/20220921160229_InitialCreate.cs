using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace reactnet.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Longitude",
                table: "locations",
                newName: "longitude");

            migrationBuilder.RenameColumn(
                name: "Latitude",
                table: "locations",
                newName: "latitude");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "locations",
                newName: "id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "longitude",
                table: "locations",
                newName: "Longitude");

            migrationBuilder.RenameColumn(
                name: "latitude",
                table: "locations",
                newName: "Latitude");

            migrationBuilder.RenameColumn(
                name: "id",
                table: "locations",
                newName: "Id");
        }
    }
}
